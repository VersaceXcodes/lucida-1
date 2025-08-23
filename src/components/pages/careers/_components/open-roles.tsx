import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingMd,
} from "@/components/ui/typography";
import OpenRoleItem from "./open-role-item";

const OpenRoles = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[1110px] mx-auto">
				<div className="flex flex-col gap-4 md:mb-24 mb-12">
					<CodeMdParagraph>OPEN ROLES</CodeMdParagraph>
					<HeadingMd>
						We are always happy to collaborate with talents.
					</HeadingMd>
					<BodyMdParagraph>
						We're excited to team up with creative minds and explore new
						possibilities together.
					</BodyMdParagraph>
				</div>
				<div className="w-full md:px-10 px-6 py-3 rounded-xl border border-neutral-10 bg-neutral-5">
					{ROLES.map((role, index) => (
						<OpenRoleItem
							key={role.role + index}
							{...role}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

const ROLES = [
	{
		role: "Product designer",
		type: "Remote",
		category: "Design",
		location: "Berlin",
		content: (
			<div className="bg-white p-5 rounded-xl">
				<p className="font-medium">Designer, Berlin</p>
				<br />
				<p className="text-secondary/70">
					Join our Backend engineering team to lead the development of LUCIDA—a
					game that transforms knowledge into interactive experiences. You'll
					shape the technical architecture, guide complex decisions, and
					integrate AI to enhance our development process.
				</p>
				<br />
				<p className="font-medium">What we offer:</p>
				<ul className="text-secondary/70">
					<li>
						- Work with cutting-edge technologies in education and game
						development.
					</li>
					<li>
						- Showcase your leadership and technical skills, impacting student
						learning.
					</li>
					<li>- Enjoy ownership and independence in your role.</li>
				</ul>
				<br />
				<p className="font-medium">Your responsibilities:</p>
				<ul className="text-secondary/70">
					<li>
						- Lead the Unity team and set the direction for game development.
					</li>
					<li>
						- Design the game's technical architecture to align with business
						goals.
					</li>
					<li>- Establish coding standards and best practices.</li>
					<li>
						- Collaborate with product managers and designers for functionality
						and user experience.
					</li>
					<li>- Drive the integration of AI tools to improve the game.</li>
				</ul>
			</div>
		),
	},
	{
		role: "Product designer",
		type: "Remote",
		category: "Design",
		location: "Berlin",
		content: (
			<div className="bg-white p-5 rounded-xl">
				<p className="font-medium">Designer, Berlin</p>
				<br />
				<p className="text-secondary/70">
					Join our Backend engineering team to lead the development of LUCIDA—a
					game that transforms knowledge into interactive experiences. You'll
					shape the technical architecture, guide complex decisions, and
					integrate AI to enhance our development process.
				</p>
				<br />
				<p className="font-medium">What we offer:</p>
				<ul className="text-secondary/70">
					<li>
						- Work with cutting-edge technologies in education and game
						development.
					</li>
					<li>
						- Showcase your leadership and technical skills, impacting student
						learning.
					</li>
					<li>- Enjoy ownership and independence in your role.</li>
				</ul>
				<br />
				<p className="font-medium">Your responsibilities:</p>
				<ul className="text-secondary/70">
					<li>
						- Lead the Unity team and set the direction for game development.
					</li>
					<li>
						- Design the game's technical architecture to align with business
						goals.
					</li>
					<li>- Establish coding standards and best practices.</li>
					<li>
						- Collaborate with product managers and designers for functionality
						and user experience.
					</li>
					<li>- Drive the integration of AI tools to improve the game.</li>
				</ul>
			</div>
		),
	},
	{
		role: "Product designer",
		type: "Remote",
		category: "Design",
		location: "Berlin",
		content: (
			<div className="bg-white p-5 rounded-xl">
				<p className="font-medium">Designer, Berlin</p>
				<br />
				<p className="text-secondary/70">
					Join our Backend engineering team to lead the development of LUCIDA—a
					game that transforms knowledge into interactive experiences. You'll
					shape the technical architecture, guide complex decisions, and
					integrate AI to enhance our development process.
				</p>
				<br />
				<p className="font-medium">What we offer:</p>
				<ul className="text-secondary/70">
					<li>
						- Work with cutting-edge technologies in education and game
						development.
					</li>
					<li>
						- Showcase your leadership and technical skills, impacting student
						learning.
					</li>
					<li>- Enjoy ownership and independence in your role.</li>
				</ul>
				<br />
				<p className="font-medium">Your responsibilities:</p>
				<ul className="text-secondary/70">
					<li>
						- Lead the Unity team and set the direction for game development.
					</li>
					<li>
						- Design the game's technical architecture to align with business
						goals.
					</li>
					<li>- Establish coding standards and best practices.</li>
					<li>
						- Collaborate with product managers and designers for functionality
						and user experience.
					</li>
					<li>- Drive the integration of AI tools to improve the game.</li>
				</ul>
			</div>
		),
	},
	{
		role: "Product designer",
		type: "Remote",
		category: "Design",
		location: "Berlin",
		content: (
			<div className="bg-white p-5 rounded-xl">
				<p className="font-medium">Designer, Berlin</p>
				<br />
				<p className="text-secondary/70">
					Join our Backend engineering team to lead the development of LUCIDA—a
					game that transforms knowledge into interactive experiences. You'll
					shape the technical architecture, guide complex decisions, and
					integrate AI to enhance our development process.
				</p>
				<br />
				<p className="font-medium">What we offer:</p>
				<ul className="text-secondary/70">
					<li>
						- Work with cutting-edge technologies in education and game
						development.
					</li>
					<li>
						- Showcase your leadership and technical skills, impacting student
						learning.
					</li>
					<li>- Enjoy ownership and independence in your role.</li>
				</ul>
				<br />
				<p className="font-medium">Your responsibilities:</p>
				<ul className="text-secondary/70">
					<li>
						- Lead the Unity team and set the direction for game development.
					</li>
					<li>
						- Design the game's technical architecture to align with business
						goals.
					</li>
					<li>- Establish coding standards and best practices.</li>
					<li>
						- Collaborate with product managers and designers for functionality
						and user experience.
					</li>
					<li>- Drive the integration of AI tools to improve the game.</li>
				</ul>
			</div>
		),
	},
];

export default OpenRoles;
