"use client";

const ContactMap = () => {
  const location = {
    name: "Research I",
    lat: 53.167007,
    lng: 8.648703,
    addr: {
      city: "Bremen",
      country: "DE",
      housenumber: "12",
      postcode: "28759",
      street: "Campus Ring",
    },
    building: "university",
    buildingLevels: 2,
  };

  const position = [location.lat, location.lng];
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${position[1] - 0.01}%2C${position[0] - 0.01}%2C${position[1] + 0.01}%2C${position[0] + 0.01}&layer=mapnik&marker=${position[0]}%2C${position[1]}`;
  const largerMapUrl = `https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}&zoom=15`;

  return (
    <div className="relative h-full w-full">
      {/* Map */}
      <iframe
        src={mapUrl}
        className="border-0 h-full w-full"
        allowFullScreen
        title="Contact Map"
      ></iframe>

      {/* Overlay Details */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-semibold text-grey-700" >{location.name}</h2>
        <p className="text-sm text-gray-700">
 {location.addr.street}, {location.addr.city}
        </p>
        <p className="text-sm text-gray-600">Building: {location.building}</p>
        <a
          href={largerMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          Show in Larger Map
        </a>
      </div>
    </div>
  );
};

export default ContactMap;
