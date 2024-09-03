import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function CodeOfConduct() {
  return (
    <main className="container flex mx-auto px-5 py-2 flex-col">
      <Header />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Code of Conduct</h1>
        <p className="mb-4">
          Why do we have an official anti-harassment policy for GDG Montreal events?
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            It sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment.
          </li>
          <li>
            It encourages people to attend who have had bad experiences at other events.
          </li>
          <li>
            It gives event staff/volunteers instructions on how to handle harassment quickly, with the minimum amount of disruption for the event.
          </li>
        </ul>
        <p className="mb-4">
          GDG Montreal Android is dedicated to providing a harassment-free event experience for everyone, regardless of:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>gender</li>
          <li>sexual orientation</li>
          <li>disability</li>
          <li>gender identity</li>
          <li>age</li>
          <li>race</li>
          <li>religion</li>
          <li>nationality</li>
        </ul>
        <p className="mb-4">
          The above is not an exhaustive list — we do not tolerate harassment of event participants in any form.
        </p>
        <p className="mb-4">
          Sexual language and imagery is not appropriate for any event venue, including talks. Event participants violating these rules may be expelled from the event, and even banned from future events at the discretion of the event organizers/management.
        </p>
        <p className="mb-4">
          Harassment includes (but is not limited to):
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion</li>
          <li>the use or display of sexual images in public spaces</li>
          <li>deliberate intimidation</li>
          <li>stalking</li>
          <li>harassing photography or recording</li>
          <li>sustained disruption of talks or other events</li>
          <li>inappropriate physical contact</li>
          <li>unwelcome sexual attention</li>
        </ul>
        <p className="mb-4">
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>
        <p className="mb-4">
          Exhibiting partners and guest speakers are also subject to the anti-harassment policy. In particular, exhibitors and speakers should not use sexualized images, activities, or other material, or otherwise create a sexualized environment in their slide decks, exhibit material, exhibit staffing, promotional items or demo material.
        </p>
        <p className="mb-4">
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer or event volunteer immediately. Organizers and event volunteers may be identified by t-shirts or special badges/lanyards. Organizers will investigate the issue and take appropriate action. This may include helping participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event.
        </p>
        <h3 className="text-xl font-bold">
          Contacts:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li><a href="mailto:info@gdgmontreal.com">info@gdgmontreal.com</a></li>
          <li><a href="mailto:laurence@gdgmontreal.com">laurence@gdgmontreal.com</a></li>
          <li><a href="mailto:samuel@gdgmontreal.com">samuel@gdgmontreal.com</a></li>
          <li><a href="mailto:boris@gdgmontreal.com">boris@gdgmontreal.com</a></li>
          <li><a href="mailto:nav@gdgmontreal.com">nav@gdgmontreal.com</a></li>
          <li><a href="mailto:jhin@gdgmontreal.com">jhin@gdgmontreal.com</a></li>
        </ul>
        <p className="mb-4">
          Though we hope that we never have to invoke this policy, we believe that having this document helps everyone think a little more about how their actions and words affect the whole community, as well as individuals in the community.
        </p>
        <h2 className="text-2xl font-bold">
          License and attribution
        </h2>
        <p className="mb-4">
          This policy is licensed under the Creative Commons Zero license. This policy is based on several other policies, including the Ohio LinuxFest anti-harassment policy, written by Esther Filderman and Beth Lynn Eicher, and the Con Anti-Harassment Project. Mary Gardiner, Valerie Aurora, Sarah Smith, and Donna Benjamin generalized the policies and added supporting material. Many members of LinuxChix, Geek Feminism and other groups contributed to this work.
        </p>
      </div>
      <Footer />
    </main >
  );
}
