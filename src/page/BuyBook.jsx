import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, ShoppingBag, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LocationMarker = ({ onSelect }) => {
  useMapEvents({
    dblclick(e) {
      const { lat, lng } = e.latlng;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then((res) => res.json())
        .then((data) => {
          onSelect({ lat, lng, address: data.display_name });
        });
    },
  });
  return null;
};

const MapSearch = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const map = useMap();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const res = await fetch(`https://photon.komoot.io/api/?q=${value}&limit=5&lang=en`);
      const data = await res.json();
      setResults(data.features);
    }
  };

  const handleSelect = (place) => {
    const [lng, lat] = place.geometry.coordinates;
    const label = place.properties.name + ', ' + (place.properties.city || '');

    map.setView([lat, lng], 15);
    onSelect({ lat, lng, address: label });
    setQuery(label);
    setResults([]);
  };

  return (
    <div className="absolute top-4 left-[50%] z-[1000] w-72">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search your location (e.g. Jamner)"
        className="w-full px-3 py-2 rounded border border-gray-600 bg-white text-black"
      />
      {results.length > 0 && (
        <ul className="bg-white text-black mt-1 rounded shadow max-h-40 overflow-auto">
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-sm"
            >
              {item.properties.name}, {item.properties.city || item.properties.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProductOrder = () => {
    const { bookname, price } = useParams();
  const [form, setForm] = useState({
    product: `${bookname}`,
    price: `${price}`, 
    address: '',
    phone: '',
    landmark: '',
    cod: true,
  });

  const [marker, setMarker] = useState(null);
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleLocation = ({ lat, lng, address }) => {
    setMarker([lat, lng]);
    setForm((prev) => ({ ...prev, address }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.address || !form.phone.trim()) {
      setError('📍 Please fill all required fields (Address & Mobile Number).');
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setError('📞 Mobile number must be 10 digits.');
      return;
    }

    setError('');
    setOrderPlaced(true);

    setTimeout(() => {
      window.location.href = '/';
    }, 60000); // 60 sec
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* ✅ Order Animation Overlay */}
      {orderPlaced && (
            <div className="absolute z-[9999] inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="text-green-400 mb-6"
      >
        <CheckCircle className="w-24 h-24 text-green-400 drop-shadow-lg" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl font-extrabold text-green-300"
      >
        Order Placed Successfully!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-gray-300 mt-3 text-lg"
      >
        You’ll be redirected to home in <span className="text-green-400 font-semibold">60 seconds</span>...
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all"
        onClick={() => window.location.reload()} // or navigate to order page
      >
        Buy Again
      </motion.button>
    </div>
      )}

      {/* Form */}
      {!orderPlaced && (
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col gap-6 justify-center"
        >
          <h2 className="text-3xl font-bold text-teal-400 mb-4">📦 Order Your Book</h2>

          {error && <div className="bg-red-600 text-white p-2 rounded">{error}</div>}

          <div className="flex items-center gap-3">
            <ShoppingBag className="text-teal-400" />
            <input
              name="product"
              value={form.product}
              readOnly
              className="bg-transparent border-b border-gray-600 w-full placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="text-teal-400" />
            <input
              name="price"
              value={form.price}
              readOnly
              className="bg-transparent border-b border-gray-600 w-full placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            📞
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit mobile number"
              className="bg-transparent border-b border-gray-600 w-full placeholder-gray-400 outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            🏠
            <input
              name="landmark"
              value={form.landmark}
              onChange={handleChange}
              placeholder="Nearest landmark (optional)"
              className="bg-transparent border-b border-gray-600 w-full placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-teal-400 mt-1" />
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Double click on map or search location"
              className="bg-transparent border-b border-gray-600 w-full placeholder-gray-400 outline-none h-20 resize-none"
              required
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="cod"
              checked={form.cod}
              onChange={handleChange}
              className="accent-teal-500"
            />
            Cash on Delivery
          </label>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 transition py-2 rounded font-semibold"
          >
            Place Order
          </button>
        </form>
      )}

      {/* Map */}
      {!orderPlaced && (
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative hidden md:block">
          <MapContainer
            center={[21.146633, 79.08886]}
            zoom={5}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom
            doubleClickZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapSearch onSelect={handleLocation} />
            <LocationMarker onSelect={handleLocation} />
            {marker && <Marker position={marker} />}
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default ProductOrder;
