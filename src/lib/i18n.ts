import { FAQS } from "@/constants/faqs";
import { FEATURES_CARDS } from "@/constants/features";
import { FOOTER_LINKS } from "@/constants/links";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			layout: {
				footer: FOOTER_LINKS.en,
				header: {
					features: "Features",
					careers: "Careers",
					getSupport: "Get Support",
					download: "Download",
				},
			},
			home: {
				coreFeatures: {
					key: "CORE FEATURES",
					title: "Your Go-To App for Hassle Free Solutions",
					content:
						"Seamlessly connect with experts and manage your projects from anywhere using our user-friendly mobile app designed for your convenience.",
				},
				presentation: {
					one: {
						title: "Exclusive place for Exploring",
						content:
							"Easily chat with experts and keep track of your projects on the go with our super easy mobile app made just for you.",
					},
					two: {
						title: "Best suggestion for an individual to use",
						content:
							"Manage Your Entire Business Ecosystem from a Single Dashboard with Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs.",
					},
					three: {
						title: "Boost your business efficiency",
						content:
							"Manage Your Entire Business Ecosystem from a Single Dashboard with Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs.",
					},
				},
				features: FEATURES_CARDS.en,
				downloadApp: {
					title: "Download now and explore",
					content:
						"Lucida is the coolest app for finding localpros right in your area.",
				},
				faq: {
					name: "GOT QUESTIONS?",
					title: "FAQ",
					content:
						"Discover quick and comprehensive answers to common questions about our platform, services, and features.",
					items: FAQS.en,
				},
				qr: {
					title: "Get it now. Explore. Enjoy.",
					content:
						"Discover quick and comprehensive answers to common questions about our platform, services, and features.",
				},
			},
		},
	},
	ar: {
		translation: {
			layout: {
				footer: FOOTER_LINKS.ar,
				header: {
					features: "الميزات",
					careers: "الوظائف",
					getSupport: "احصل على الدعم",
					download: "تحميل",
				},
			},
			home: {
				coreFeatures: {
					key: "الميزات الأساسية",
					title: "تطبيقك المفضل للحلول السهلة",
					content:
						"تواصل بسلاسة مع الخبراء وأدر مشاريعك من أي مكان باستخدام تطبيقنا المحمول سهل الاستخدام المصمم لراحتك",
				},
				presentation: {
					one: {
						title: "مكان حصري للاستكشاف",
						content:
							"تواصل بسهولة مع الخبراء واحتفظ بسجل لمشاريعك أثناء التنقل مع تطبيقنا المحمول السهل المصمم خصيصًا لك",
					},
					two: {
						title: "أفضل اقتراح للاستخدام الفردي",
						content:
							"إدارة نظام أعمالك بالكامل من لوحة تحكم واحدة مع حل SaaS القائم على السحابة القابل للتوسع والمصمم وفقًا لاحتياجاتك",
					},
					three: {
						title: "زيادة كفاءة عملك",
						content:
							"إدارة نظام أعمالك بالكامل من لوحة تحكم واحدة مع حل SaaS القائم على السحابة القابل للتوسع والمصمم وفقًا لاحتياجاتك",
					},
				},
				features: FEATURES_CARDS.ar,
				downloadApp: {
					title: "قم بالتنزيل الآن واستكشف",
					content:
						" .لوسيدا هو التطبيق الأكثر روعة للعثور على المحترفين المحليين في منطقتك",
				},
				faq: {
					name: "هل لديك أسئلة؟",
					title: "الأسئلة الشائعة",
					content:
						"اكتشف إجابات سريعة وشاملة للأسئلة الشائعة حول منصتنا وخدماتنا وميزاتها.",
					items: FAQS.ar,
				},
				qr: {
					title: " .احصل عليه الآن. استكشف. استمتع ",
					content:
						" .اكتشف إجابات سريعة وشاملة للأسئلة الشائعة حول منصتنا وخدماتنا وميزاتها",
				},
			},
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
