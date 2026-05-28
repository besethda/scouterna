'use client';
import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
    const position: [number, number] = [59.36332, 17.82199];
    const zoom: number = 15;
    return (
        <div className=''>
            <MapContainer center={position} zoom={zoom} className='rounded-2xl  h-80 w-full'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <Link href="https://maps.app.goo.gl/sFxM5RaFKjgsMcVP8">
                            Ruffen | Hässelby Strands Sjöscoutkår
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map