import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export default function ProfileHeader() {
  return (
    <Card className="w-full overflow-hidden">
      <div className="md:flex">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 md:p-8 md:w-1/3 flex flex-col items-center justify-center text-white">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarFallback className="text-4xl font-bold bg-teal-600">
              KP
            </AvatarFallback>
            <AvatarImage
              src="/profile-pic.png?height=128&width=128"
              alt="Khushal Parmar"
            />
          </Avatar>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-center">
            KHUSHAL PARMAR
          </h1>
          <p className="mt-1 text-lg font-medium text-teal-100">
            B.Tech. - CSE
          </p>

          <div className="mt-4 flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91-9352868523</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm truncate">
                2203051050296@paruluniversity.ac.in
              </span>
              <span className="text-sm truncate">
                khushalparmar1208@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Sirohi, Rajasthan, India</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 md:w-2/3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Full Stack Web Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Computer Science Student
              </p>
            </div>
            <a href="/Resume_JOB.pdf" download>
              <Button variant="outline" className="mt-4 md:mt-0" size="sm">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                About Me
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate Computer Science student with a focus on Full Stack
                Web Development. Winner of PU Code Hackathon (1st Prize) with
                strong problem-solving abilities and technical expertise.
                Actively staying updated on technological advancements to
                deliver impactful solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Key Expertise
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  Full Stack Development
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  Problem Solving
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  Leadership Experience
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                 Tableau
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full text-sm">
                  Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
