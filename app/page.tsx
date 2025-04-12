import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, User, Globe } from "lucide-react"
import ProfileHeader from "@/components/profile-header"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import TimelineItem from "@/components/timeline-item"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />

        <Tabs defaultValue="about" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brief Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a third-year Computer Science student at Parul Institute of Technology, I am passionate about
                  becoming a skilled Full Stack Web Developer. I actively stay updated on technological advancements and
                  enhance my expertise in web development to deliver impactful solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  I am proud to be the winner of the PU Code Hackathon (1st Prize), where my team, CrowdStrike,
                  outperformed 750+ teams from 50+ universities. This achievement highlights my ability to collaborate
                  under pressure and deliver results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Positions of Responsibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Backend Developer - PU Code Hackathon (1st Prize)</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>Played a pivotal role as the backend developer in a team of skilled professionals.</li>
                    <li>
                      Responsible for designing and implementing APIs, efficiently fetching data, and ensuring seamless
                      integration with the overall system.
                    </li>
                    <li>
                      Demonstrated strong problem-solving abilities, teamwork, and technical expertise under challenging
                      and competitive circumstances.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Placement Cell Coordinator</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Managed 10+ placement drives, engaged 30+ companies, and facilitated recruitment of 200+ students.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">Gender: Male</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">Marital Status: Single</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">Date of Birth: 12 Aug, 2003</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Languages: Marwadi, Gujrati, Hindi, English
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Interests & Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Dancing</Badge>
                    <Badge variant="outline">Exercise</Badge>
                    <Badge variant="outline">Sudoku</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>My expertise in various technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsSection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>My academic journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <TimelineItem
                    year="2022 - 2026"
                    title="Parul University"
                    subtitle="B.Tech. - CSE - PIT"
                    description="CGPA: 8.15 / 10"
                  />
                  <TimelineItem
                    year="2021"
                    title="SHIV JYOTI SR SEC SCHOOL, Kota"
                    subtitle="12th | RBSE"
                    description="Percentage: 95.20 / 100"
                  />
                  <TimelineItem
                    year="2019"
                    title="MODERN SR SEC SCHOOL, SHIVGANJ, Sirohi"
                    subtitle="10th | RBSE"
                    description="Percentage: 80.50 / 100"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="FlexiPay-UPI Manager"
                teamSize={2}
                skills={["ReactJS", "NodeJS", "MongoDB", "GraphQL", "API"]}
                description="Built a multi-UPI linking and transaction tracking system to manage UPI payments across apps."
                points={[
                  "Implemented secure authentication and real-time spending analytics.",
                  "Designed a minimalist UI/UX using Tailwind CSS for seamless user experience.",
                ]}
              />

              <ProjectCard
                title="Efficio- AI Email Assistant"
                teamSize={4}
                skills={["Twilio", "Google API", "OpenAI GPT-3"]}
                description="Automated email-to-WhatsApp summaries using AI to enhance email productivity."
                points={[
                  "Integrated Google Calendar API to create automatic meeting reminders from email data.",
                  "Developed interactive WhatsApp chatbot using Twilio for email response automation",
                ]}
              />

              <ProjectCard
                title="Medisync"
                teamSize={4}
                skills={["ReactJS", "NodeJS", "MongoDB", "Express", "System Design", "API"]}
                description="Online Doctors Appointment System"
                points={[
                  "Online checkup through video call",
                  "Direct connection between doctor and patient within seconds",
                  "Online personal health Assistant",
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-xl text-green-700 dark:text-green-400">Won PU Code Hackathon</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      1st Prize winner among 750+ teams from 50+ universities with team CrowdStrike.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Certifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge>Certificate</Badge>
                        <span>Data Visualization with Python and Tableau</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge>Workshop</Badge>
                        <span>Tableau workshop</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge>Certificate</Badge>
                        <span>Introduction to Cyber Security</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with me</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Primary</p>
                        <a href="tel:+919352868523" className="text-gray-700 dark:text-gray-300 hover:underline">
                          +91-9352868523
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Secondary</p>
                        <a href="tel:+919460716915" className="text-gray-700 dark:text-gray-300 hover:underline">
                          +91-9460716915
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">University Email</p>
                        <a
                          href="mailto:2203051050296@paruluniversity.ac.in"
                          className="text-gray-700 dark:text-gray-300 hover:underline break-all"
                        >
                          2203051050296@paruluniversity.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Personal Email</p>
                        <a
                          href="mailto:khushalparmar1208@gmail.com"
                          className="text-gray-700 dark:text-gray-300 hover:underline break-all"
                        >
                          khushalparmar1208@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-gray-700 dark:text-gray-300">
                          Hanuman Chowk Chawani Sheoganj, Sirohi, Rajasthan, India - 307027
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/khushal-parmar-892a7522b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:underline"
                        >
                          khushal-parmar-892a7522b
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">GitHub</p>
                        <a
                          href="https://github.com/Khushal1208"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:underline"
                        >
                          Khushal1208
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button asChild className="px-8">
                    <a href="mailto:khushalparmar1208@gmail.com">Contact Me</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
