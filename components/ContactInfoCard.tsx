"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactMap from "./ContactMap";

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  details: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Address",
    details: ["KU Leuven", "Department of Engineering", "3000 Leuven, Belgium"],
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    details: ["research@kuleuven.be", "admin@kuleuven.be"],
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Phone",
    details: ["+32 1234 5678", "+32 8765 4321"],
  },
];

const ContactInfoCard = () => {
  return (
    <Card className="w-full max-w-5xl mx-auto bg-background dark:bg-dark dark:text-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-primary dark:text-grey-900">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Column */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-3 items-start hover:bg-primary-light dark:hover:bg-primary-dark-light p-4 rounded-lg transition-colors duration-200"
              >
                {info.icon}
                <div>
                  <h2 className="font-semibold text-primary dark:text-grey-900">{info.title}</h2>
                  <ul className="text-primary dark:text-grey-100">
                    {info.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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