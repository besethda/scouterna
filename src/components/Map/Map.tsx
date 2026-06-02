'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LocationList } from './locationList';
import yellowLocationIcon from '../../../public/yellow-location.svg'
import blueLocationIcon from '../../../public/blue-location-icon.svg'
import L from 'leaflet';

interface mapProps {
    page: string,
}

const Map = ({ page }: mapProps) => {
    const markerRef = useRef<Record<number, L.Marker | null>>({});
    const [selectedId, setSelectedId] = useState<number | null>(null)


    const position: [number, number] = [59.38344, 17.82824];
    const ruffen: [number, number] = [59.36332, 17.82199];
    const zoom: number = 11;
    const center = page === "footer" ? position : ruffen;
    return (
        <div className=''>
            <MapContainer
                center={center}
                zoom={zoom}
                key={page}
                className={`w-full z-10 ${page === "footer" ? "h-64 rounded-t-2xl" : "h-80 rounded-2xl "}`}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {page === "footer" ? (
                    <>
                        {LocationList.map((location, index) =>
                            <Marker
                                position={[location.Latitude, location.Longitude]}
                                key={index}
                                ref={(ref) => {
                                    markerRef.current[location.id] = ref
                                }}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedId(location.id);
                                    }
                                }}
                            >
                                <Popup
                                >
                                    <Link href={location.url}>
                                        {location.name} | Hässelby Strands Sjöscoutkår
                                    </Link>
                                </Popup>

                            </Marker>)}
                    </>
                ) : (
                    <>
                        {
                            <Marker position={[LocationList[1].Latitude, LocationList[1].Longitude]}>
                                <Popup>
                                    <Link href={LocationList[1].url}>
                                        {LocationList[1].name} | Hässelby Strands Sjöscoutkår
                                    </Link>
                                </Popup>
                            </Marker>
                        }
                    </>
                )
                }
            </MapContainer>
            {page === "footer" &&
                <div className='font-albert flex flex-col cursor-pointer md:grid md:grid-cols-2 md:rounded-b-2xl md:divide-x md:divide-y'>
                    {LocationList.map((location, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedId(location.id);
                                markerRef.current[location.id]?.openPopup()
                            }}
                            className={`group flex gap-3 px-4 py-3 border border-text-gray 
                        ${index !== 0 ? "border-t-0" : ""}
                        ${index === LocationList.length - 1 ? "rounded-b-2xl md:rounded-b-none md:rounded-br-2xl" : "border-b-none "} 
                        ${index === LocationList.length - 2 ? "md:rounded-bl-2xl" : " "}
                        `}>
                            {selectedId === location.id ? (
                                <>
                                    <div className='w-6.5 h-6.5 bg-accent rounded-full flex justify-center items-center'>
                                        <Image src={blueLocationIcon} alt="location" width={16} height={20} className='w-4 h-5 object-contain' />
                                    </div>
                                    <div>
                                        <p className=''>{location.name}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='w-6.5 h-6.5 rounded-full flex items-center justify-center group-hover:bg-accent/30 group-hover:rounded-full'>
                                        <Image src={yellowLocationIcon} alt="location" width={16} height={20} className='w-4 h-5 object-contain' />
                                    </div>
                                    <div>
                                        <p className='group-hover:text-gray-300'>{location.name}</p>
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>
            }
        </div >
    )
}

export default Map
