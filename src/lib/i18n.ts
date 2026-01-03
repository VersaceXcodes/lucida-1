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
					key: "WHY LUCIDA",
					title: "Libya's First Home Services Booking App",
					content:
						"With Lucida, life is easier. Book trusted home services - cleaning, maintenance, laundry and more - according to your time, schedule, and budget.",
				},
				presentation: {
					one: {
						title: "Browse Services by Category",
						content:
							"Explore a wide range of home services including cleaning, car wash, laundry, maintenance, and more - all organized for easy discovery.",
					},
					two: {
						title: "Compare and Choose with Confidence",
						content:
							"View service details, pricing, and provider ratings before booking. Make informed decisions with transparent information.",
					},
					three: {
						title: "Book in Just a Few Taps",
						content:
							"Choose your preferred time, confirm your booking, and track your appointments - all from one simple app.",
					},
				},
				features: FEATURES_CARDS.en,
				downloadApp: {
					title: "Download Lucida Today",
					content:
						"Libya's first home services app. Book cleaning, maintenance, and more in just a few taps.",
				},
				faq: {
					name: "GOT QUESTIONS?",
					title: "FAQ",
					content:
						"Find answers to common questions about booking services, payments, and more.",
					items: FAQS.en,
				},
				qr: {
					title: "Get Lucida Now",
					content:
						"Scan the QR code to download the app and start booking home services today.",
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
					key: "لماذا لوسيدا",
					title: "أول تطبيق حجز خدمات منزلية في ليبيا",
					content:
						"مع لوسيدا حياتك أسهل. احجز خدمات التنظيف والصيانة والغسيل وأكثر حسب وقتك وجدولك وميزانيتك.",
				},
				presentation: {
					one: {
						title: "تصفح الخدمات حسب الفئة",
						content:
							"استكشف مجموعة واسعة من الخدمات المنزلية بما في ذلك التنظيف وغسيل السيارات والمغسلة والصيانة والمزيد.",
					},
					two: {
						title: "قارن واختر بثقة",
						content:
							"اطلع على تفاصيل الخدمة والأسعار وتقييمات مقدمي الخدمة قبل الحجز. اتخذ قرارات مستنيرة بمعلومات شفافة.",
					},
					three: {
						title: "احجز بضغطات قليلة",
						content:
							"اختر الوقت المناسب لك، أكد حجزك، وتابع مواعيدك - كل ذلك من تطبيق واحد بسيط.",
					},
				},
				features: FEATURES_CARDS.ar,
				downloadApp: {
					title: "حمّل لوسيدا الآن",
					content:
						"أول تطبيق خدمات منزلية في ليبيا. احجز التنظيف والصيانة وأكثر بضغطات قليلة.",
				},
				faq: {
					name: "هل لديك أسئلة؟",
					title: "الأسئلة الشائعة",
					content:
						"اعثر على إجابات للأسئلة الشائعة حول حجز الخدمات والدفع والمزيد.",
					items: FAQS.ar,
				},
				qr: {
					title: "احصل على لوسيدا الآن",
					content:
						"امسح رمز QR لتحميل التطبيق وابدأ بحجز الخدمات المنزلية اليوم.",
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
