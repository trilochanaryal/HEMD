"use client";

const ContactMap = () => {
  const position = [50.8798, 4.7005];
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=4.6905%2C50.8750%2C4.7105%2C50.8845&layer=mapnik&marker=${position[0]}%2C${position[1]}`;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <iframe
        src={mapUrl}
        style={{ border: 0, height: "100%", width: "100%" }}
        allowFullScreen
        title="Contact Map"
      ></iframe>
    </div>
  );
};

export default ContactMap;
