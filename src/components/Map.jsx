import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Heart } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icon in Leaflet + Vite/Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Heart Icon could be used, but standard marker is fine for now with the fix above.

const locations = [
    {
        id: 1,
        position: [40.7128, -74.0060], // New York
        name: "First Date",
        desc: "The coffee shop where I spilled my drink."
    },
    {
        id: 2,
        position: [48.8566, 2.3522], // Paris
        name: "Dream Vacation",
        desc: "One day we will go here together!"
    },
    {
        id: 3,
        position: [34.0522, -118.2437], // LA
        name: "Where We Met",
        desc: "Best day of my life."
    }
];

const Map = () => {
    return (
        <section className="py-20 px-4 bg-pink-50">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Map of Us</h2>

            <div className="max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-0 relative">
                <MapContainer
                    center={[40.7128, -74.0060]}
                    zoom={3}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((loc) => (
                        <Marker key={loc.id} position={loc.position}>
                            <Popup>
                                <div className="text-center p-2">
                                    <Heart className="w-4 h-4 text-love-red mx-auto mb-1 fill-current" />
                                    <h3 className="font-bold text-gray-800">{loc.name}</h3>
                                    <p className="text-sm text-gray-600">{loc.desc}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
};

export default Map;
