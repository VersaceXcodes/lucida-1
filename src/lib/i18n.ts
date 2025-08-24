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
			},
			home: {
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
			},
			home: {
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
	lng: "ar",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
