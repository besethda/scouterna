'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LocationList } from './locationList';
import locationIcon from '../../../public/hss-pin-icon.svg'

interface mapProps {
    page: string,
}

const Map = ({ page }: mapProps) => {
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
                className={`w-full ${page === "footer" ? "h-64 rounded-t-2xl" : "h-80 rounded-2xl "}`}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {page === "footer" ? (
                    <>
                        {LocationList.map((location, index) =>
                            <Marker position={[location.Latitude, location.Longitude]} key={index}>
                            </Marker>)}
                    </>
                ) : (
                    <>
                        {
                            <Marker position={[LocationList[1].Latitude, LocationList[1].Longitude]}>
                                <Popup>
                                    <Link href="https://maps.app.goo.gl/sFxM5RaFKjgsMcVP8">
                                        Ruffen | Hässelby Strands Sjöscoutkår
                                    </Link>
                                </Popup>
                            </Marker>}
                    </>
                )
                }
            </MapContainer>
            {page === "footer" &&
                <div className='flex flex-col md:grid md:grid-cols-2 md:rounded-b-2xl md:divide-x md:divide-y'>
                    {LocationList.map((location, index) => (
                        <div
                            key={index}
                            className={`flex gap-3 px-4 py-3 border border-text-gray 
                        ${index !== 0 ? "border-t-0" : ""}
                        ${index === LocationList.length - 1 ? "rounded-b-2xl md:rounded-b-none md:rounded-br-2xl" : "border-b-none "} 
                        ${index === LocationList.length - 2 ? "md:rounded-bl-2xl" : " "}
                        `}>
                            <Image src={locationIcon} alt="location" width={16} height={16} />
                            <div>
                                <p className=''>{location.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div >
    )
}

export default Map
