import { c as createComponent, r as renderTemplate, d as renderSlot, e as renderHead, a as addAttribute, b as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CcQcyTIf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet"><meta name="generator"', "><title>", '</title><link rel="canonical" href="https://www.creative-tim.com/astro/"><!-- Google Tag Manager --><!-- End Google Tag Manager -->', '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', ' <script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"></script> <!-- Bootstrap JavaScript Bundle with Popper --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script> <!-- Product JavaScript --> </body></html>'])), addAttribute(`${"/"}favicon.svg`, "href"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/zekibestia/Documentos/SheloNabel/Pages/astro-tutorial/src/layouts/Layout.astro", void 0);

const products = [
	{
		id: "01",
		thumb_src: "/images/suit-3.jpg",
		thumb_alt: "watch-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
				alt: "fourth_image"
			}
		],
		color: "8 colors",
		colors: [
			"red",
			"blue",
			"green"
		],
		title: "Basic Starter Pack",
		price: 399,
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		full_description: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
		details: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.",
		highlights: [
			"Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
			"Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics",
			"Oil is a crucial source of petrochemicals, which are used in the production of plastics."
		],
		features: [
			"Multiple strap configuration",
			"Water Resistant",
			"Stainless strap loops",
			"Ultra-soft 100% cotton"
		],
		rating: 4,
		reviews: 117,
		size: "Small",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 1213,
			XL: 6
		},
		data: {
			Features: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
			Care: "It really matters and then like it really doesn`t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn`t matter. Because it's about motivating the doers. Because I`m here to follow my dreams and inspire other people to follow their dreams, too.",
			Shipping: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
			Returns: "I always felt like I could do anything. That`s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can`t do anything, you won`t do anything. I was taught I could do everything."
		},
		featuresDetails: [
			{
				title: "Misión",
				description: "Construir una empresa con calidez humana, reconocida a nivel nacional e internacional por su excelente calidad en el servicio y en sus productos."
			},
			{
				title: "Visión",
				description: "Nuestro principal compromiso es generar abundancia en nuestros afiliados. La compañía se enfoca en su gente, en su crecimiento profesional y económico para que sientan ese placer de gozar las maravillas que les presenta la vida."
			},
			{
				title: "Valores",
				description: "Nuestro propósito es “QUE LA GENTE GANE”. Nuestro éxito depende de la gente, por ello queremos hacerles fácil y agradable su negocio. Mantendremos una actitud innovadora tanto en los productos, como en la forma de dirigir nuestro negocio."
			}
		],
		stock: true
	},
	{
		id: "02",
		thumb_src: "/images/suit-1.jpg",
		thumb_alt: "watch-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				alt: "fourth_image"
			}
		],
		color: "Black",
		colors: [
			"black",
			"green",
			"white"
		],
		title: "Pink Blouse",
		price: 1490,
		rating: 5,
		reviews: 117,
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		full_description: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming `Charcoal Gray` limited release.",
		features: [
			"Multiple strap configuration",
			"Water Resistant",
			"Stainless strap loops",
			"Ultra-soft 100% cotton"
		],
		size: "Medium",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		data: {
			Features: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
			Care: "It really matters and then like it really doesn`t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn`t matter. Because it's about motivating the doers. Because I`m here to follow my dreams and inspire other people to follow their dreams, too.",
			Shipping: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
			Returns: "I always felt like I could do anything. That`s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can`t do anything, you won`t do anything. I was taught I could do everything."
		},
		featuresDetails: {
			Origin: "Designed by Good Goods, Inc.",
			Material: "Solid walnut base with rare earth magnets and powder coated steel card cover",
			Dimensions: "6.25 x 3.55' x 1.15'",
			Finish: "Hand sanded and finished with natural oil",
			Includes: "Wood card tray and 3 refill packs",
			Considerations: "Made from natural materials. Grain and color vary with each item."
		},
		stock: false
	},
	{
		id: "03",
		thumb_src: "/images/suit-2.jpg",
		thumb_alt: "iMac-image",
		images: [
			{
				src: "https://images.unsplash.com/photo-1567790350645-dbc1486a89c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "first_image"
			},
			{
				src: "https://images.unsplash.com/photo-1593088177922-aa1c5055c7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "second_image"
			},
			{
				src: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "third_image"
			},
			{
				src: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
				alt: "fourth_image"
			}
		],
		color: "Yellow",
		colors: [
			"SpaceGray"
		],
		title: "Premium Suit",
		description: "There’s nothing I really wanted to do in life that I wasn’t able to get good at.",
		price: 1399,
		size: "Large",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		data: {
			Design: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
			Material: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? People are so scared to lose that they don't even try.",
			Considerations: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.",
			Included: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
		},
		stock: true
	},
	{
		id: "04",
		thumb_src: "/images/suit-5.jpg",
		thumb_alt: "iPhone_thumb",
		color: "Blue",
		title: "iPhone",
		description: "That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
		price: 1599,
		size: "Small",
		sizes: {
			XS: 3,
			S: 0,
			M: 1,
			L: 0,
			XL: 6
		},
		stock: false
	}
];
const categories = [
	{
		thumb_src: "../images/cosmeticos.png",
		title: "Labiales",
		collection: "Cosmeticos"
	},
	{
		thumb_src: "../images/cuidadocapilar.png",
		title: "Shampoos",
		collection: "Cuidado Capilar"
	},
	{
		thumb_src: "../images/lineainfantil.png",
		title: "Body Bebé",
		collection: "Linea Infantil"
	},
	{
		thumb_src: "../images/familiababa.png",
		title: "Cremas y Jabones",
		collection: "Familia Baba de caracol"
	},
	{
		thumb_src: "../images/product10.jpg",
		title: "Living Sofas",
		collection: "Interior Design"
	},
	{
		thumb_src: "../images/category5.jpg",
		title: "Chairs by Designers",
		collection: "Sale"
	},
	{
		thumb_src: "/images/product9.jpg",
		title: "Home care",
		collection: "Products"
	}
];
const reviews = [
	{
		avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Hector Gibbs",
		date: "July 17, 2023",
		rating: 5,
		comment: "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. ",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Willie Manson",
		date: "Aug 18, 2023",
		rating: 4,
		comment: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Mary Doyle",
		date: "Nov 11, 2023",
		rating: 5,
		comment: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Joe Molly",
		date: "Mar 23, 2023",
		rating: 3,
		comment: "It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink.",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Keisha Megan",
		date: "Jun 21, 2023",
		rating: 4,
		comment: "For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
		productID: "01"
	},
	{
		avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
		name: "Kevin Klein",
		date: "Dec 01, 2023",
		rating: 5,
		comment: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out.",
		productID: "01"
	}
];
const orders = [
	{
		orderNumber: 23791,
		products: [
			{
				id: "01",
				status: "Processed",
				quantity: 1,
				dateModified: "March 23, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 3,
				dateModified: "June 28, 2023"
			}
		],
		payment: {
			cardNumber: "0042",
			expiringDate: "06/26"
		},
		date: "March 23, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "michael@email.com",
		phoneNumber: "(808) 791-6935"
	},
	{
		orderNumber: "WB2341",
		products: [
			{
				id: "03",
				status: "Order Placed",
				quantity: 1,
				dateModified: "March 23, 2023"
			}
		],
		payment: {
			cardNumber: "4119",
			expiringDate: "06/26"
		},
		date: "March 28, 2023",
		address: "362 Ridgewood Dr, Soldotna, Alaska 99669, USA",
		email: "john@email.com",
		phoneNumber: "(307) 612-7721"
	},
	{
		orderNumber: "010110",
		products: [
			{
				id: "04",
				status: "Order Placed",
				quantity: 1,
				dateModified: "Sep 09, 2023"
			},
			{
				id: "01",
				status: "Shipped",
				quantity: 1,
				dateModified: "Sep 12, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 1,
				dateModified: "Sep 13, 2023"
			}
		],
		payment: {
			cardNumber: "5290",
			expiringDate: "11/27"
		},
		date: "Sep 07, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "doe@email.com",
		phoneNumber: "(307) 682-8835"
	}
];
const shoppingCart = [
	"01",
	"02",
	"03"
];
const shoppingCart2 = [
	"02",
	"03",
	"04"
];
const data = {
	products: products,
	categories: categories,
	reviews: reviews,
	orders: orders,
	shoppingCart: shoppingCart,
	shoppingCart2: shoppingCart2
};

function CardProduct({
  thumb_src,
  title,
  collection,
  classList,
  cta
}) {
  const classBody = cta != null ? "align-items-end d-flex" : "text-center w-100 pt-8";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsxs("div", { className: `card card-background align-items-start mb-4 mb-lg-0 ${classList}`, children: [
    /* @__PURE__ */ jsx("div", { className: "full-background", style: { backgroundImage: `url(${`${"/"}${thumb_src}`})`, backgroundSize: "cover" } }),
    /* @__PURE__ */ jsx("div", { className: `card-body ${classBody}`, children: /* @__PURE__ */ jsxs("div", { className: "d-block mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white font-weight-bold mb-1", children: collection }),
      /* @__PURE__ */ jsx("h4", { className: "text-white font-weight-bolder", children: title }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-white text-sm font-weight-semibold mb-0", children: "Comprar productos >" })
    ] }) })
  ] }) }) });
}

function ProductGallery({
  images
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "d-block d-md-flex", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3 mb-4 mb-md-0", src: `${"/"}images/shelonabel.png`, alt: images[0].alt }) }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3", src: `${"/"}images/carroshelo.jpg`, alt: images[2].alt }) }),
      /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "w-100 max-height-200 rounded-3", src: `${"/"}images/aniversario.png`, alt: images[3].alt }) })
    ] })
  ] });
}

function ProductAccordion({
  featuresDetails
}) {
  const prodFeatures = [];
  Object.entries(featuresDetails).map(([title, value]) => {
    prodFeatures.push(
      /* @__PURE__ */ jsx("div", { className: "col-12 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "d-flex mb-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "me-2", width: "30", height: "30", viewBox: "0 0 20 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 23C14.4183 23 18 19.4183 18 15C18 10.5817 14.4183 7 10 7C5.58172 7 2 10.5817 2 15C2 19.4183 5.58172 23 10 23ZM13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929L9 15.5858L7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L13.7071 13.7071Z", fill: "#111827" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-uppercase text-primary", children: title }),
          /* @__PURE__ */ jsx("p", { children: value })
        ] })
      ] }) }, title)
    );
  });
  return /* @__PURE__ */ jsx(Fragment, { children: prodFeatures });
}

function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card card-product card-plain", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12 col-lg-7 mx-auto text-center", children: [
      title.length != 0 && /* @__PURE__ */ jsx("h2", { className: "mb-3", children: title }),
      full_description.length != 0 && /* @__PURE__ */ jsx("p", { className: "mb-5", children: full_description })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 pe-5", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx(ProductAccordion, { featuresDetails }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6", children: /* @__PURE__ */ jsx(ProductGallery, { images }) })
    ] })
  ] }) });
}

const Navbar = () => {
  return /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0", children: /* @__PURE__ */ jsxs("div", { className: "container px-1", children: [
    /* @__PURE__ */ jsx("a", { className: "navbar-brand font-weight-bolder ms-lg-0 ", href: "https://www.creative-tim.com/astro", children: "Cris Cara" }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler shadow-none ms-2", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navigation", "aria-controls": "navigation", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsxs("span", { className: "navbar-toggler-icon mt-2", children: [
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar1" }),
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar2" }),
      /* @__PURE__ */ jsx("span", { className: "navbar-toggler-bar bar3" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse", id: "navigation", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav ms-auto", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "/astro-ecommerce/", children: "Catálogo" }) }),
      /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
        /* @__PURE__ */ jsx("a", { className: "nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", id: "pagesExample", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: "Pages" }),
        /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu", "aria-labelledby": "pagesExample", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/landing/", children: "Landing Page" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/product/", children: "Product Page" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "dropdown-item", href: "/astro-ecommerce/shopping-cart/", children: "Shopping Cart" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce", children: "Comprar" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://github.com/creativetimofficial/astro-ecommerce", children: /* @__PURE__ */ jsx("i", { className: "fab text-lg fa-github" }) }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link text-dark font-weight-bold d-flex align-items-center me-2 ", "aria-current": "page", href: "https://discord.com/invite/TGZqBvZB", rel: "nofollow", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fab text-lg fa-discord" }) }) })
    ] }) })
  ] }) });
};

function Footer() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { className: "footer pt-3  ", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center justify-content-lg-between", children: [
    /* @__PURE__ */ jsx("div", { className: "col-lg-6 mb-lg-0 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "copyright text-center text-sm text-muted text-lg-start", children: [
      "Copyright ©",
      " ",
      /* @__PURE__ */ jsx("script", { children: "document.write(new Date().getFullYear())" }),
      " Astro Ecommerce by",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com",
          className: "text-dark ms-1",
          target: "_blank",
          children: "Creative Tim"
        }
      ),
      "."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxs("ul", { className: "nav nav-footer justify-content-center justify-content-lg-end", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "Creative Tim"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/presentation",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "About Us"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/blog",
          className: "nav-link text-sm text-muted",
          target: "_blank",
          children: "Blog"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.creative-tim.com/license",
          className: "nav-link text-sm pe-0 text-muted",
          target: "_blank",
          children: "License"
        }
      ) })
    ] }) })
  ] }) }) });
}

function ReviewRating({
  rating
}) {
  const ratingStar = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(
        /* @__PURE__ */ jsx("svg", { className: "text-warning w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", clipRule: "evenodd" }) })
      );
    } else {
      ratingStar.push(
        /* @__PURE__ */ jsx("svg", { className: "text-light w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", clipRule: "evenodd" }) })
      );
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center", children: ratingStar }) });
}

function TestimonialsFade$1({
  pageHeaderBgImg,
  pageHeaderMinVh
}) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "page-header rounded-top", style: styles.pageHeader, children: [
      /* @__PURE__ */ jsx("div", { className: "faded opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "container z-index-2", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-sm-9 text-center mx-auto pt-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4", children: "Exclusive Discounts for Members" }),
        /* @__PURE__ */ jsx("p", { className: "lead mb-sm-5 px-md-8", children: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you." }),
        /* @__PURE__ */ jsxs("button", { className: "btn btn-dark btn-lg d-flex align-items-center mx-auto", children: [
          /* @__PURE__ */ jsxs("svg", { className: "me-2", width: "15", height: "15", viewBox: "0 0 15 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.00002 3.4999C4.00002 2.34011 4.94023 1.3999 6.10002 1.3999C6.63788 1.3999 7.12849 1.6021 7.50002 1.93463C7.87158 1.6021 8.36214 1.3999 8.90002 1.3999C10.0599 1.3999 11 2.34011 11 3.4999C11 3.74535 10.9579 3.98096 10.8805 4.1999H11.7C12.4732 4.1999 13.1 4.8267 13.1 5.5999C13.1 6.3731 12.4732 6.9999 11.7 6.9999H8.20002V6.2999C8.20002 5.91331 7.88663 5.5999 7.50002 5.5999C7.11343 5.5999 6.80002 5.9133 6.80002 6.2999V6.9999H3.30002C2.52683 6.9999 1.90002 6.3731 1.90002 5.5999C1.90002 4.8267 2.52683 4.1999 3.30002 4.1999H4.11952C4.04213 3.98096 4.00002 3.74535 4.00002 3.4999ZM6.80002 4.1999V3.4999C6.80002 3.11331 6.48662 2.7999 6.10002 2.7999C5.71343 2.7999 5.40002 3.11331 5.40002 3.4999C5.40002 3.8865 5.71343 4.1999 6.10002 4.1999H6.80002ZM8.90002 4.1999C9.28663 4.1999 9.60003 3.8865 9.60003 3.4999C9.60003 3.11331 9.28663 2.7999 8.90002 2.7999C8.51341 2.7999 8.20002 3.11331 8.20002 3.4999V4.1999H8.90002Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M6.79998 7.69995H2.59998V11.2C2.59998 11.9732 3.22678 12.6 3.99998 12.6H6.79998V7.69995Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M8.20001 12.6H11C11.7732 12.6 12.4 11.9732 12.4 11.2V7.69995H8.20001V12.6Z", fill: "white" })
          ] }),
          "Get your code"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-weight-bolder mt-4 mb-2", children: "Our customer’s opinion" }),
      /* @__PURE__ */ jsx("p", { className: "mb-5 w-60", children: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out." }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "4" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Alexa Liras" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "5" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Laurent Perrier" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-12 col-lg-4", children: /* @__PURE__ */ jsx("div", { className: "card border shadow-xs mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card-body text-start p-3 w-100", children: [
          /* @__PURE__ */ jsx(ReviewRating, { rating: "4" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams." }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "avatar avatar-sm position-relative me-2", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80", className: "rounded-circle" }) }),
            /* @__PURE__ */ jsx("h6", { className: "mb-0", children: "Michael Levi" })
          ] })
        ] }) }) })
      ] })
    ] })
  ] }) });
}

function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  profileImg
}) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "page-header py-5 py-md-0", style: styles.pageHeader, children: [
    /* @__PURE__ */ jsx("span", { className: "mask bg-black opacity-6" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-8 col-sm-9 text-center mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white mb-4", children: title }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white mb-sm-6 mb-4", children: full_description }),
      profileImg && /* @__PURE__ */ jsx("div", { className: "rounded-circle mx-auto d-block my-4", style: { width: "330px", height: "330px", objectFit: "cover" }, children: /* @__PURE__ */ jsx("img", { src: profileImg, alt: "Profile", className: "w-100 h-100 rounded-circle" }) }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-white btn-lg", children: "Contactame" })
    ] }) }) })
  ] }) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "PromoSectionLarge", TestimonialsFade, { "title": "Shelo Nabel", "pageHeaderBgImg": "../images/vidaplena.png", "pageHeaderMinVh": "90vh", "pageHeaderRadius": "1rem", "profileImg": "../images/anacara.jpg" })} <div class="container my-5"> <div class="d-block text-center mb-5"> <h3>Comprar por categoria</h3> <a class="text-dark font-weight-bold" href="#">Ver todas las categorias &#62;</a> </div> <div class="row mb-5"> ${data.categories.slice(0, 4).map(
    (category) => renderTemplate`<div class="col-md-6 col-lg-3"> ${renderComponent($$result2, "CardCategory", CardProduct, { "thumb_src": category.thumb_src, "collection": category.collection, "title": category.title })} </div>`
  )} </div> ${renderComponent($$result2, "PromoSectionLarge", TestimonialsFade, { "title": "Basic Starter Pack", "full_description": data.products[0].full_description, "pageHeaderBgImg": "../images/vidaplena.png", "pageHeaderMinVh": "50vh", "pageHeaderRadius": "1rem" })} <div class="my-5"> ${renderComponent($$result2, "ProductFeature", ProductOverview, { "title": "\xBFQu\xE9 es Shelo Nabel?", "images": data.products[2].images, "full_description": "Somos una empresa orgullosamente mexicana que ofrece un estilo de vida en plenitud, a trav\xE9s de vivir en amor, abundancia y bienestar.", "featuresDetails": {
    "Mision": "Construir una empresa con calidez humana, reconocida a nivel nacional e internacional por su excelente calidad en el servicio y en sus productos.",
    "Vision": "Nuestro principal compromiso es generar abundancia en nuestros afiliados. La compa\xF1\xEDa se enfoca en su gente, en su crecimiento profesional y econ\xF3mico para que sientan ese placer de gozar las maravillas que les presenta la vida.",
    "Valores": "Nuestro prop\xF3sito es \u201CQUE LA GENTE GANE\u201D. Nuestro \xE9xito depende de la gente, por ello queremos hacerles f\xE1cil y agradable su negocio. Mantendremos una actitud innovadora tanto en los productos, como en la forma de dirigir nuestro negocio."
  } })} </div> <div class="mt-5 mb-10"> ${renderComponent($$result2, "TestimonialsFade", TestimonialsFade$1, { "pageHeaderBgImg": "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80", "pageHeaderMinVh": "50vh" })} </div> ${renderComponent($$result2, "Footer", Footer, {})} </div> </main> ` })}`;
}, "/home/zekibestia/Documentos/SheloNabel/Pages/astro-tutorial/src/pages/index.astro", void 0);

const $$file = "/home/zekibestia/Documentos/SheloNabel/Pages/astro-tutorial/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
