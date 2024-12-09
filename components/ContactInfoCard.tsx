"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactMap from "./ContactMap";

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
  building: "University",
  buildingLevels: 2,
  wheelchair: "official",
};

const ContactInfoCard = () => {
  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Column */}
          <div className="space-y-6">
            <div className="p-4  rounded-lg">
              <h2 className="font-semibold text-lg mb-2">Address</h2>
              <ul className="space-y-1">
                <li className="text-sm">{`${location.addr.housenumber} ${location.addr.street}`}</li>
                <li className="text-sm">{`${location.addr.postcode}, ${location.addr.city}`}</li>
                <li className="text-sm">{`${location.addr.country}`}</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg">
              <h2 className="font-semibold text-lg mb-2">Building Details</h2>
              <ul className="space-y-1">
                <li className="text-sm">{`Building: ${location.building}`}</li>
                <li className="text-sm">{`Levels: ${location.buildingLevels}`}</li>
                <li className="text-sm">{`Wheelchair Accessible: ${location.wheelchair}`}</li>
              </ul>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow">
            <ContactMap />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
