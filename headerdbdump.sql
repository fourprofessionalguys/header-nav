--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: hosts; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.hosts (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "hostUrl" text,
    "dateJoined" date,
    language character varying(255),
    "responseRate" character varying(255),
    "responseTime" character varying(255)
);


ALTER TABLE public.hosts OWNER TO cj;

--
-- Name: hosts_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.hosts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hosts_id_seq OWNER TO cj;

--
-- Name: hosts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.hosts_id_seq OWNED BY public.hosts.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO cj;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO cj;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO cj;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO cj;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: listings; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.listings (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    city character varying(255),
    state character varying(255),
    country character varying(255),
    cost numeric(8,2),
    capacity integer,
    type character varying(255),
    bedrooms integer,
    beds integer,
    baths integer,
    "photoUrl" text,
    host_id integer
);


ALTER TABLE public.listings OWNER TO cj;

--
-- Name: listings_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.listings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.listings_id_seq OWNER TO cj;

--
-- Name: listings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.listings_id_seq OWNED BY public.listings.id;


--
-- Name: hosts id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.hosts ALTER COLUMN id SET DEFAULT nextval('public.hosts_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: listings id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.listings ALTER COLUMN id SET DEFAULT nextval('public.listings_id_seq'::regclass);


--
-- Data for Name: hosts; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.hosts (id, name, description, "hostUrl", "dateJoined", language, "responseRate", "responseTime") FROM stdin;
1	Newell Haag	I am a professional Dancer. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_0bDm6kFC2Tc.jpeg	2018-09-18	\N	44%	31 hours
2	Kyle Skiles	I moved to the city to pursue a career in opera and other creative endevors. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_3U2wGr-Inps.jpeg	2018-09-21	\N	52%	8 hours
4	Pierre Littel	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_7ncPcGL60-s.jpeg	2019-05-05	\N	64%	19 hours
3	Grace McLaughlin	I work as a lawyer for a small, private firm. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_4Np_d6IJuQk.jpeg	2018-06-12	\N	96%	2 hours
5	Margaretta Corwin	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_6TLxH30vmWM.jpeg	2018-08-19	\N	100%	27 hours
6	Dawn Jacobs	I work in advertising and marketing for an international firm. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_8GuvbXdn40U.jpeg	2019-02-23	\N	47%	18 hours
7	Kareem Anderson	I work in advertising and marketing for an international firm. I am addicted to travel and fine dinning. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_C9EOBGeiJsw.jpeg	2019-04-12	\N	25%	5 hours
8	Queenie Schoen	I am a professional Dancer. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_CUJTifrLCLs.jpeg	2019-01-31	\N	51%	30 hours
9	Gardner Feeney	I am a professional Dancer. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_DpdTfB8lQTc.jpeg	2018-10-19	\N	72%	15 hours
10	Tremayne Haley	I moved to the city to pursue a career in opera and other creative endevors. My passion is putting together beautiful living spaces. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FULkoZ989E4.jpeg	2018-06-29	\N	42%	20 hours
11	Maximo Beer	I work in advertising and marketing for an international firm. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FVrXs076Df8.jpeg	2018-09-14	\N	41%	43 hours
12	Katrina Jacobi	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JC1oue4zY5U.jpeg	2019-03-19	\N	41%	13 hours
13	Lexus Dickens	I am a professional Dancer. I am addicted to travel and fine dinning. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JyVcAIUAcPM.jpeg	2018-11-14	\N	90%	8 hours
14	Stewart Dare	I am originally from Canada, but went to university in the UK. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_MeU7XG3HOes.jpeg	2018-06-02	\N	57%	19 hours
15	Murphy Satterfield	I work as a lawyer for a small, private firm. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_V2sJMCDdslA.jpeg	2018-08-27	\N	30%	37 hours
16	Graham Fritsch	I work in advertising and marketing for an international firm. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_VN2znosQaK0.jpeg	2019-01-16	\N	51%	19 hours
17	Wellington Schroeder	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_XU-OwxtV4Ko.jpeg	2018-11-16	\N	65%	23 hours
18	Forrest Ullrich	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Xa2xi8g5xrI.jpeg	2018-11-11	\N	69%	35 hours
19	Ayla Maggio	I work as a lawyer for a small, private firm. My passion is putting together beautiful living spaces. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Y6N_w94x8ik.jpeg	2019-03-12	\N	54%	43 hours
20	Brennan Shanahan	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ZxG76-UM6w0.jpeg	2018-06-24	\N	42%	29 hours
21	Lessie Doyle	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225__t_EMqrNzi0.jpeg	2019-04-23	\N	31%	15 hours
22	Cletus Legros	I am a professional Dancer. My passion is putting together beautiful living spaces. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_aLT-JhaNqIU.jpeg	2018-09-26	\N	52%	3 hours
23	Maya Mertz	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_bVPtaf-8jI8.jpeg	2018-11-12	\N	52%	24 hours
24	Elisha Glover	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_gtpm-tiTr9U.jpeg	2018-11-08	\N	54%	34 hours
25	Elvera Ortiz	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_j7Z-XUHHN40.jpeg	2018-07-27	\N	40%	31 hours
26	Tamara Hayes	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_koE9TOrYrgo.jpeg	2019-04-22	\N	100%	20 hours
27	Madaline Reynolds	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_m663zRzRe40.jpeg	2019-04-12	\N	65%	39 hours
28	Roxanne Langworth	I work in advertising and marketing for an international firm. I am addicted to travel and fine dinning. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_myggK4JQdLI.jpeg	2019-01-01	\N	49%	12 hours
29	Ambrose Conroy	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_qDs5alqjJAk.jpeg	2018-09-05	\N	78%	37 hours
30	Alan Beahan	I work in advertising and marketing for an international firm. My passion is putting together beautiful living spaces. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_r3pqFjVmrQU.jpeg	2018-10-28	\N	60%	32 hours
40	Perry Dooley	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_C9EOBGeiJsw.jpeg	2019-03-07	\N	37%	33 hours
50	Era Roberts	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_XU-OwxtV4Ko.jpeg	2018-06-12	\N	73%	23 hours
60	Destiney Wisoky	I work in advertising and marketing for an international firm. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_m663zRzRe40.jpeg	2019-05-10	\N	27%	44 hours
70	Lorenzo Lowe	I work as a lawyer for a small, private firm. I am addicted to travel and fine dinning. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_6TLxH30vmWM.jpeg	2019-05-29	\N	41%	46 hours
80	Eda O'Reilly	I work in advertising and marketing for an international firm. I am passionate about design and architecture. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_MeU7XG3HOes.jpeg	2019-01-02	\N	35%	34 hours
90	Chance Aufderhar	I am originally from Canada, but went to university in the UK. I love traveling and meeting people from all over the world. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_gtpm-tiTr9U.jpeg	2018-09-10	\N	51%	43 hours
100	Evans Lakin	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_0bDm6kFC2Tc.jpeg	2018-07-15	\N	53%	33 hours
31	Shakira Fahey	I am a professional Dancer. My passion is putting together beautiful living spaces. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ufWjkFmTNXo.jpeg	2018-09-21	\N	98%	25 hours
41	Jaeden Jakubowski	I work as a lawyer for a small, private firm. I love traveling and meeting people from all over the world. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_CUJTifrLCLs.jpeg	2018-08-24	\N	89%	18 hours
51	Ambrose Mills	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Xa2xi8g5xrI.jpeg	2018-11-24	\N	39%	26 hours
61	Ceasar Howe	I am a professional Dancer. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_myggK4JQdLI.jpeg	2018-09-29	\N	72%	3 hours
71	Norbert Wuckert	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_7ncPcGL60-s.jpeg	2019-01-27	\N	33%	11 hours
81	Yesenia Kub	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_V2sJMCDdslA.jpeg	2019-02-04	\N	99%	11 hours
91	Wilbert Orn	I am originally from Canada, but went to university in the UK. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_j7Z-XUHHN40.jpeg	2019-01-03	\N	41%	19 hours
32	Stanton Kuvalis	I am a recent university graduate working in Web Development. I am passionate about design and architecture. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_v6771a4avV4.jpeg	2019-03-07	\N	60%	27 hours
42	Shawna Goyette	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_DpdTfB8lQTc.jpeg	2018-09-15	\N	74%	32 hours
52	Ocie Luettgen	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Y6N_w94x8ik.jpeg	2018-07-23	\N	31%	6 hours
62	Mariam Stokes	I am a professional Dancer. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_qDs5alqjJAk.jpeg	2018-07-11	\N	72%	30 hours
72	Lawrence Rohan	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_8GuvbXdn40U.jpeg	2018-10-06	\N	97%	7 hours
82	Mason Carroll	I am a professional Dancer. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_VN2znosQaK0.jpeg	2019-05-10	\N	74%	41 hours
92	Darian Bahringer	I work as a lawyer for a small, private firm. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_koE9TOrYrgo.jpeg	2018-09-06	\N	42%	16 hours
33	Ophelia Considine	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_yki80w96VZ0.jpeg	2018-12-17	\N	27%	13 hours
43	Noelia Gibson	I work as a lawyer for a small, private firm. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FULkoZ989E4.jpeg	2018-11-13	\N	49%	5 hours
53	Darrion Eichmann	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ZxG76-UM6w0.jpeg	2018-10-11	\N	44%	18 hours
63	Joshuah Koelpin	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_r3pqFjVmrQU.jpeg	2019-05-23	\N	81%	12 hours
73	Ambrose Weissnat	I am a professional Dancer. My passion is putting together beautiful living spaces. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_C9EOBGeiJsw.jpeg	2019-01-23	\N	65%	11 hours
83	Sunny Hermann	I am originally from Canada, but went to university in the UK. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_XU-OwxtV4Ko.jpeg	2019-01-11	\N	86%	31 hours
93	Timmy Walsh	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_m663zRzRe40.jpeg	2018-12-11	\N	66%	9 hours
34	Trevion Walsh	I am a recent university graduate working in Web Development. I am passionate about design and architecture. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_0bDm6kFC2Tc.jpeg	2019-04-03	\N	57%	44 hours
44	Gregg Nikolaus	I am originally from Canada, but went to university in the UK. I love traveling and meeting people from all over the world. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FVrXs076Df8.jpeg	2018-12-13	\N	77%	1 hours
54	Devonte Mosciski	I am originally from Canada, but went to university in the UK. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225__t_EMqrNzi0.jpeg	2018-07-03	\N	25%	31 hours
64	Merle Olson	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ufWjkFmTNXo.jpeg	2018-12-17	\N	45%	36 hours
74	Khalil Labadie	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_CUJTifrLCLs.jpeg	2019-01-09	\N	63%	1 hours
84	Audrey Price	I am a professional Dancer. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Xa2xi8g5xrI.jpeg	2019-03-23	\N	45%	35 hours
94	Gaetano Nikolaus	I am originally from Canada, but went to university in the UK. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_myggK4JQdLI.jpeg	2018-09-14	\N	92%	36 hours
35	Lavina Herzog	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_3U2wGr-Inps.jpeg	2018-10-28	\N	55%	12 hours
45	Jerrod Stanton	I work in advertising and marketing for an international firm. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JC1oue4zY5U.jpeg	2018-10-13	\N	81%	31 hours
55	Eldon Bauch	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_aLT-JhaNqIU.jpeg	2018-10-30	\N	67%	44 hours
65	Stefan Leannon	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_v6771a4avV4.jpeg	2018-11-01	\N	54%	35 hours
75	Kimberly Reilly	I work in advertising and marketing for an international firm. I am passionate about design and architecture. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_DpdTfB8lQTc.jpeg	2018-11-13	\N	83%	17 hours
85	Lolita Feest	I work in advertising and marketing for an international firm. My passion is putting together beautiful living spaces. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_Y6N_w94x8ik.jpeg	2018-06-04	\N	39%	32 hours
95	Sheldon Rowe	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_qDs5alqjJAk.jpeg	2018-10-10	\N	37%	8 hours
36	Cale Kovacek	I am originally from Canada, but went to university in the UK. I am passionate about design and architecture. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_4Np_d6IJuQk.jpeg	2018-07-16	\N	71%	32 hours
46	Creola Bashirian	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JyVcAIUAcPM.jpeg	2018-10-29	\N	67%	26 hours
56	Christine Nader	I am a recent university graduate working in Web Development. I am passionate about design and architecture. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_bVPtaf-8jI8.jpeg	2018-06-16	\N	74%	37 hours
66	Geovanny Mante	I moved to the city to pursue a career in opera and other creative endevors. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_yki80w96VZ0.jpeg	2019-05-05	\N	91%	16 hours
76	Selena Lebsack	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FULkoZ989E4.jpeg	2018-10-04	\N	39%	30 hours
86	Emory Ankunding	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ZxG76-UM6w0.jpeg	2019-01-09	\N	28%	28 hours
96	Laurie Price	I am a professional Dancer. I love traveling and meeting people from all over the world. I am excited to make you love this place as much as I do.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_r3pqFjVmrQU.jpeg	2019-05-25	\N	58%	2 hours
37	Ellen Nader	I work in advertising and marketing for an international firm. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_6TLxH30vmWM.jpeg	2018-07-21	\N	60%	12 hours
47	Bart Stokes	I am a professional Dancer. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_MeU7XG3HOes.jpeg	2018-06-23	\N	63%	43 hours
57	Vanessa Hamill	I moved to the city to pursue a career in opera and other creative endevors. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_gtpm-tiTr9U.jpeg	2019-04-09	\N	90%	39 hours
67	Tressa Dickinson	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_0bDm6kFC2Tc.jpeg	2018-08-07	\N	67%	33 hours
77	Earline Ernser	I am a professional Dancer. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_FVrXs076Df8.jpeg	2019-03-24	\N	87%	13 hours
87	Adrienne Larkin	I am a professional Dancer. My passion is putting together beautiful living spaces. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225__t_EMqrNzi0.jpeg	2019-03-20	\N	72%	30 hours
97	Deondre Keebler	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_ufWjkFmTNXo.jpeg	2019-02-01	\N	68%	39 hours
38	Elwyn Murphy	I am originally from Canada, but went to university in the UK. My passion is putting together beautiful living spaces. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_7ncPcGL60-s.jpeg	2019-02-12	\N	69%	32 hours
48	Amely Reynolds	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_V2sJMCDdslA.jpeg	2018-07-26	\N	30%	1 hours
58	Cordell Effertz	I am a recent university graduate working in Web Development. I am addicted to travel and fine dinning. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_j7Z-XUHHN40.jpeg	2019-03-24	\N	85%	12 hours
68	Neoma Harvey	I am a recent university graduate working in Web Development. I am passionate about design and architecture.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_3U2wGr-Inps.jpeg	2019-05-21	\N	74%	9 hours
78	Shana Hansen	I am a professional Dancer. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JC1oue4zY5U.jpeg	2018-10-12	\N	93%	22 hours
88	Diana Lemke	I am originally from Canada, but went to university in the UK. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_aLT-JhaNqIU.jpeg	2019-05-07	\N	59%	5 hours
98	Percival Braun	I am a recent university graduate working in Web Development. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_v6771a4avV4.jpeg	2019-03-25	\N	25%	41 hours
39	Khalid Hegmann	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_8GuvbXdn40U.jpeg	2019-05-03	\N	43%	5 hours
49	Micheal Bogan	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_VN2znosQaK0.jpeg	2019-05-02	\N	65%	4 hours
59	Jesse Heaney	I am a recent university graduate working in Web Development. I am passionate about design and architecture. Looking foward to meeting new people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_koE9TOrYrgo.jpeg	2018-12-01	\N	58%	30 hours
69	Karson Raynor	I moved to the city to pursue a career in opera and other creative endevors. I am passionate about design and architecture. Please don't hesitate to reach out with any questions regarding the property.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_4Np_d6IJuQk.jpeg	2018-07-23	\N	37%	29 hours
79	Dixie Smith	I work in advertising and marketing for an international firm. I am addicted to travel and fine dinning.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_JyVcAIUAcPM.jpeg	2019-03-21	\N	89%	26 hours
89	Nettie Gerlach	I am a recent university graduate working in Web Development. My passion is putting together beautiful living spaces.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_bVPtaf-8jI8.jpeg	2018-06-14	\N	67%	44 hours
99	Jasmin Collier	I am originally from Canada, but went to university in the UK. I love traveling and meeting people from all over the world.	https://s3.amazonaws.com/airbnbcloneuserphotos/225x225_yki80w96VZ0.jpeg	2019-05-28	\N	43%	7 hours
\.


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
39	20190525143558_airbnb_clone_listing.js	1	2019-05-31 11:40:01.235-06
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: listings; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.listings (id, title, description, city, state, country, cost, capacity, type, bedrooms, beds, baths, "photoUrl", host_id) FROM stdin;
1	Vintage Parisian studio in the heart of city	A delightful place to stay in the heart of downtown.	West Abdul	Iowa	Ethiopia	364.00	1	townhouse	2	12	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AQl-J19ocWE.jpg	1
2	Admire Stunning Ocean Views from a Stylish Loft in Chic neighborhood	A scenic place to stay at a seculeded location.	Mosciskimouth	Wisconsin	Macedonia	355.00	1	townhouse	6	10	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AX-hGV70sd0.jpg	2
3	Immaculate Architect's Mediterranean style apartment near the beach	A scenic place to stay at a seculeded location.	New Archstad	South Carolina	Pitcairn Islands	278.00	1	house	1	9	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_F68K6buOR2s.jpg	4
4	Admire Stunning Ocean Views from a Parisian studio in the heart of city	A lovely place to stay in the heart of downtown.	Margeberg	Mississippi	Barbados	470.00	1	house	9	5	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AhiUnolb7cg.jpg	3
5	Modern Artist's studio	A beautiful place to stay in the middle of the woods.	Luciousbury	Nebraska	Eritrea	271.00	1	house	12	8	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_C_dRtsnBOQA.jpg	5
6	Unwind in a Studio apartment minutes from downtown	A lovely place to stay at a seculeded location.	Alvertaview	Nebraska	Monaco	420.00	1	house	10	4	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_FqqiAvJejto.jpg	6
7	Modern Townhouse with terrace	A delightful place to stay at a seculeded location.	Wehnerstad	West Virginia	Mauritius	202.00	1	house	4	7	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GdCIsUD2-yA.jpg	7
8	Take a magic stroll through the city from this Parisian studio in the heart of city	A delightful place to stay at a seculeded location.	Mayertberg	Georgia	Cape Verde	129.00	1	loft	6	5	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GmEUEyISvd8.jpg	8
9	Vintage Penthouse with breathtaking views of the mountains	A delightful place to stay in the heart of downtown.	Williemouth	West Virginia	Mozambique	332.00	1	loft	1	9	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_HmREZuu4XuY.jpg	9
10	Bright Studio apartment minutes from downtown	A scenic place to stay in the middle of the woods.	Rasheedland	Delaware	Germany	459.00	1	villa	4	4	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_I4ecJKp3eFw.jpg	10
11	Vintage Townhouse with terrace	A lovely place to stay in the heart of downtown.	Lake Daniellahaven	Nebraska	Pitcairn Islands	405.00	1	townhouse	12	12	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_L0BaowhFe4c.jpg	11
12	Vintage Parisian studio in the heart of city	A lovely place to stay in the middle of the woods.	Carterburgh	Pennsylvania	New Zealand	130.00	1	villa	8	5	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_QGehbt2b6iQ.jpg	12
13	Stunning Artist's studio	A lovely place to stay in the heart of downtown.	New Briceshire	Virginia	Saint Barthelemy	121.00	1	villa	11	6	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_Rwb3barsoH8.jpg	13
14	Vintage Mediterranean style apartment near the beach	A scenic place to stay in the middle of the woods.	Edytheport	Arizona	Belize	370.00	1	house	5	12	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_TD2DKbVP284.jpg	14
15	Modern Mediterranean style apartment near the beach	A lovely place to stay at a seculeded location.	Leannonberg	Rhode Island	Puerto Rico	400.00	1	loft	12	10	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_UXFJ-6Zj27M.jpg	15
16	Vintage Artist's studio	A lovely place to stay a short walk from the beach.	North Eliezer	New York	Central African Republic	361.00	1	apartment	7	10	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_YFQGWKW33Ck.jpg	16
17	Let yourself be enlightened with this Studio apartment minutes from downtown	A scenic place to stay in the middle of the woods.	Port Quintenberg	Arizona	United Arab Emirates	424.00	1	townhouse	10	11	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_dJrIcUp4kcA.jpg	17
18	Immaculate Architect's Stylish Loft in Chic neighborhood	A lovely place to stay a short walk from the beach.	Swaniawskiborough	Minnesota	Netherlands Antilles	307.00	1	house	11	11	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_gREquCUXQLI.jpg	18
19	Take a magic stroll through the city from this Artist's studio	A beautiful place to stay a short walk from the beach.	North Monte	Maine	Luxembourg	170.00	1	loft	8	12	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_hAh4Unn50gk.jpg	19
20	Immaculate Architect's Stylish Loft in Chic neighborhood	A delightful place to stay a short walk from the beach.	Trevastad	Montana	Norway	493.00	1	villa	11	2	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_kOYh8C_xLUQ.jpg	20
21	Admire Stunning Ocean Views from a Penthouse with breathtaking views of the mountains	A delightful place to stay in the middle of the woods.	Neilmouth	Oklahoma	Slovenia	213.00	1	townhouse	8	2	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_r5pPYI6lEpA.jpg	21
22	Take a magic stroll through the city from this Townhouse with terrace	A beautiful place to stay in the heart of downtown.	Port Stewart	Texas	Niger	254.00	1	townhouse	11	12	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_zfgVn46-xJw.jpg	22
23	Take a magic stroll through the city from this Studio apartment minutes from downtown	A scenic place to stay a short walk from the beach.	Lake Aliville	Iowa	Chile	430.00	1	townhouse	9	11	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AQl-J19ocWE.jpg	23
24	Stunning Stylish Loft in Chic neighborhood	A delightful place to stay at a seculeded location.	Haleyfort	Iowa	Norfolk Island	301.00	1	apartment	7	2	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AX-hGV70sd0.jpg	24
25	Take a magic stroll through the city from this Studio apartment minutes from downtown	A delightful place to stay at a seculeded location.	Port Verna	Alabama	Guinea	447.00	1	house	5	5	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AhiUnolb7cg.jpg	25
26	Admire Stunning Ocean Views from a Parisian studio in the heart of city	A lovely place to stay a short walk from the beach.	Ameliefort	Massachusetts	Tajikistan	175.00	1	apartment	7	5	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_C_dRtsnBOQA.jpg	26
27	Admire Stunning Ocean Views from a Stylish Loft in Chic neighborhood	A delightful place to stay in the middle of the woods.	Kohlerstad	Delaware	Sweden	128.00	1	house	9	11	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_F68K6buOR2s.jpg	27
28	Modern Townhouse with terrace	A scenic place to stay at a seculeded location.	New Keenan	New York	Botswana	139.00	1	loft	4	5	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_FqqiAvJejto.jpg	28
29	Immaculate Architect's Stylish Loft in Chic neighborhood	A lovely place to stay in the middle of the woods.	Lake Easter	Nebraska	Germany	191.00	1	villa	9	12	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GdCIsUD2-yA.jpg	29
39	Charming Parisian studio in the heart of city	A delightful place to stay a short walk from the beach.	New Joyceborough	New Mexico	Togo	358.00	1	townhouse	6	2	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_dJrIcUp4kcA.jpg	39
49	Modern Artist's studio	A scenic place to stay at a seculeded location.	Sporerstad	Oklahoma	Palau	314.00	1	townhouse	7	7	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_F68K6buOR2s.jpg	49
59	Take a magic stroll through the city from this Mediterranean style apartment near the beach	A delightful place to stay in the middle of the woods.	West Nikolas	Maine	Guatemala	101.00	1	loft	7	12	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_UXFJ-6Zj27M.jpg	59
69	Modern Stylish Loft in Chic neighborhood	A scenic place to stay at a seculeded location.	Port Juwanside	Maryland	Sao Tome and Principe	352.00	1	townhouse	6	11	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AhiUnolb7cg.jpg	69
79	Modern Penthouse with breathtaking views of the mountains	A beautiful place to stay in the middle of the woods.	East Laverne	Alaska	Tunisia	218.00	1	villa	4	1	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_Rwb3barsoH8.jpg	79
89	Stunning Mediterranean style apartment near the beach	A lovely place to stay in the middle of the woods.	Kemmermouth	Michigan	Panama	478.00	1	townhouse	12	1	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AQl-J19ocWE.jpg	89
99	Bright Stylish Loft in Chic neighborhood	A scenic place to stay a short walk from the beach.	Schroederton	Maine	Martinique	461.00	1	apartment	1	1	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_L0BaowhFe4c.jpg	99
31	Let yourself be enlightened with this Studio apartment minutes from downtown	A beautiful place to stay at a seculeded location.	Theronville	Hawaii	Fiji	261.00	1	loft	9	3	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_HmREZuu4XuY.jpg	31
33	Admire Stunning Ocean Views from a Penthouse with breathtaking views of the mountains	A lovely place to stay a short walk from the beach.	East Haileeview	Pennsylvania	Senegal	224.00	1	loft	9	11	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_L0BaowhFe4c.jpg	33
40	Let yourself be enlightened with this Penthouse with breathtaking views of the mountains	A delightful place to stay in the heart of downtown.	Immanueltown	Kansas	Puerto Rico	481.00	1	townhouse	8	3	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_gREquCUXQLI.jpg	40
43	Unwind in a Mediterranean style apartment near the beach	A delightful place to stay a short walk from the beach.	East Lorenzobury	Colorado	Kenya	308.00	1	loft	2	9	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_r5pPYI6lEpA.jpg	43
50	Bright Parisian studio in the heart of city	A scenic place to stay in the heart of downtown.	East Andreane	Maryland	Bouvet Island (Bouvetoya)	173.00	1	loft	9	11	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_FqqiAvJejto.jpg	50
53	Charming Artist's studio	A scenic place to stay a short walk from the beach.	Cadestad	Tennessee	Heard Island and McDonald Islands	230.00	1	apartment	7	6	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_HmREZuu4XuY.jpg	53
60	Stunning Townhouse with terrace	A lovely place to stay in the heart of downtown.	South Everettebury	Idaho	Qatar	365.00	1	villa	3	5	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_YFQGWKW33Ck.jpg	60
63	Stunning Mediterranean style apartment near the beach	A delightful place to stay at a seculeded location.	New Jarvis	Michigan	Poland	210.00	1	house	6	4	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_hAh4Unn50gk.jpg	63
70	Unwind in a Stylish Loft in Chic neighborhood	A beautiful place to stay in the middle of the woods.	Wilkinsonshire	Wyoming	Indonesia	103.00	1	house	11	6	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_C_dRtsnBOQA.jpg	70
73	Bright Artist's studio	A beautiful place to stay in the heart of downtown.	West Fabiola	Hawaii	Bosnia and Herzegovina	499.00	1	house	10	6	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GdCIsUD2-yA.jpg	73
80	Admire Stunning Ocean Views from a Studio apartment minutes from downtown	A beautiful place to stay at a seculeded location.	Valliefort	New Hampshire	South Africa	322.00	1	apartment	5	1	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_TD2DKbVP284.jpg	80
83	Charming Penthouse with breathtaking views of the mountains	A beautiful place to stay at a seculeded location.	Lake Glenda	New Mexico	United Kingdom	361.00	1	house	10	2	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_dJrIcUp4kcA.jpg	83
90	Bright Townhouse with terrace	A lovely place to stay in the heart of downtown.	Ryanchester	California	Lithuania	408.00	1	house	6	1	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AX-hGV70sd0.jpg	90
93	Bright Mediterranean style apartment near the beach	A lovely place to stay in the middle of the woods.	West Tyrel	Michigan	Nigeria	480.00	1	house	4	12	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_F68K6buOR2s.jpg	93
100	Charming Townhouse with terrace	A lovely place to stay in the heart of downtown.	McClurefort	Oregon	Ecuador	220.00	1	apartment	12	2	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_QGehbt2b6iQ.jpg	100
32	Admire Stunning Ocean Views from a Artist's studio	A beautiful place to stay in the middle of the woods.	North Levibury	New York	Canada	246.00	1	loft	4	4	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_I4ecJKp3eFw.jpg	32
34	Let yourself be enlightened with this Mediterranean style apartment near the beach	A scenic place to stay a short walk from the beach.	Rosefort	Tennessee	Tuvalu	362.00	1	villa	3	6	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_QGehbt2b6iQ.jpg	34
41	Take a magic stroll through the city from this Townhouse with terrace	A lovely place to stay in the middle of the woods.	Enricofort	Maryland	Trinidad and Tobago	106.00	1	loft	9	7	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_hAh4Unn50gk.jpg	41
44	Take a magic stroll through the city from this Townhouse with terrace	A delightful place to stay a short walk from the beach.	Neldachester	Vermont	Sierra Leone	471.00	1	house	3	12	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_zfgVn46-xJw.jpg	44
51	Bright Artist's studio	A scenic place to stay at a seculeded location.	East Kennedyfort	Minnesota	Switzerland	442.00	1	loft	8	11	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GdCIsUD2-yA.jpg	51
54	Unwind in a Mediterranean style apartment near the beach	A scenic place to stay a short walk from the beach.	Corybury	South Carolina	Dominica	118.00	1	house	11	5	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_I4ecJKp3eFw.jpg	54
61	Take a magic stroll through the city from this Penthouse with breathtaking views of the mountains	A scenic place to stay a short walk from the beach.	Port Kurt	Nebraska	Denmark	367.00	1	townhouse	5	10	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_dJrIcUp4kcA.jpg	61
64	Stunning Studio apartment minutes from downtown	A scenic place to stay a short walk from the beach.	Gorczanyshire	Kansas	Mauritania	196.00	1	villa	10	6	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_kOYh8C_xLUQ.jpg	64
71	Let yourself be enlightened with this Stylish Loft in Chic neighborhood	A scenic place to stay a short walk from the beach.	Wolffside	California	Ethiopia	176.00	1	villa	4	10	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_F68K6buOR2s.jpg	71
74	Charming Stylish Loft in Chic neighborhood	A scenic place to stay a short walk from the beach.	East Kayleyton	Kansas	United Kingdom	344.00	1	townhouse	5	8	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GmEUEyISvd8.jpg	74
81	Let yourself be enlightened with this Artist's studio	A beautiful place to stay at a seculeded location.	Antwanmouth	Hawaii	South Georgia and the South Sandwich Islands	358.00	1	apartment	8	2	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_UXFJ-6Zj27M.jpg	81
84	Modern Townhouse with terrace	A delightful place to stay a short walk from the beach.	Kaelynberg	Colorado	Chad	126.00	1	house	11	7	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_gREquCUXQLI.jpg	84
91	Unwind in a Penthouse with breathtaking views of the mountains	A delightful place to stay a short walk from the beach.	Arturotown	Indiana	Egypt	284.00	1	house	3	2	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AhiUnolb7cg.jpg	91
94	Bright Stylish Loft in Chic neighborhood	A lovely place to stay a short walk from the beach.	Lake Siennastad	Connecticut	Saudi Arabia	450.00	1	loft	9	3	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_FqqiAvJejto.jpg	94
35	Unwind in a Parisian studio in the heart of city	A scenic place to stay in the heart of downtown.	Watersburgh	Maine	Sierra Leone	373.00	1	loft	10	12	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_Rwb3barsoH8.jpg	35
45	Bright Artist's studio	A lovely place to stay in the middle of the woods.	Mireilleberg	Louisiana	New Caledonia	101.00	1	loft	9	8	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AQl-J19ocWE.jpg	45
55	Bright Studio apartment minutes from downtown	A scenic place to stay in the middle of the woods.	Erikatown	Kansas	Bulgaria	472.00	1	apartment	3	3	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_L0BaowhFe4c.jpg	55
65	Unwind in a Penthouse with breathtaking views of the mountains	A lovely place to stay in the middle of the woods.	Tyrelmouth	Kansas	Cook Islands	497.00	1	house	1	1	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_r5pPYI6lEpA.jpg	65
75	Admire Stunning Ocean Views from a Stylish Loft in Chic neighborhood	A delightful place to stay in the middle of the woods.	West Kathlyn	Missouri	Mozambique	140.00	1	villa	3	11	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_HmREZuu4XuY.jpg	75
85	Unwind in a Studio apartment minutes from downtown	A scenic place to stay in the heart of downtown.	Hudsonfort	Montana	Liechtenstein	282.00	1	loft	10	6	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_hAh4Unn50gk.jpg	85
95	Bright Artist's studio	A lovely place to stay in the heart of downtown.	Gusikowskimouth	Nebraska	Central African Republic	343.00	1	townhouse	7	12	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GdCIsUD2-yA.jpg	95
36	Vintage Townhouse with terrace	A beautiful place to stay at a seculeded location.	Aniyahchester	Utah	Dominican Republic	432.00	1	house	11	5	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_TD2DKbVP284.jpg	36
46	Bright Penthouse with breathtaking views of the mountains	A beautiful place to stay in the heart of downtown.	West Ashlynnport	North Dakota	Slovakia (Slovak Republic)	326.00	1	apartment	10	10	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AX-hGV70sd0.jpg	46
56	Bright Studio apartment minutes from downtown	A beautiful place to stay a short walk from the beach.	Jaydaport	Connecticut	India	352.00	1	house	7	5	9	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_QGehbt2b6iQ.jpg	56
66	Bright Artist's studio	A scenic place to stay in the middle of the woods.	Sengershire	Kentucky	Saudi Arabia	299.00	1	house	2	3	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_zfgVn46-xJw.jpg	66
76	Admire Stunning Ocean Views from a Studio apartment minutes from downtown	A beautiful place to stay at a seculeded location.	Port Osvaldo	Washington	American Samoa	179.00	1	loft	1	2	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_I4ecJKp3eFw.jpg	76
86	Immaculate Architect's Penthouse with breathtaking views of the mountains	A beautiful place to stay at a seculeded location.	Leuschkemouth	Kentucky	Marshall Islands	353.00	1	house	3	6	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_kOYh8C_xLUQ.jpg	86
96	Let yourself be enlightened with this Parisian studio in the heart of city	A scenic place to stay in the heart of downtown.	Lake Clairborough	Tennessee	Uganda	414.00	1	townhouse	7	7	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GmEUEyISvd8.jpg	96
37	Stunning Mediterranean style apartment near the beach	A delightful place to stay at a seculeded location.	West Ardellaland	North Dakota	Gambia	377.00	1	house	12	9	5	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_UXFJ-6Zj27M.jpg	37
47	Let yourself be enlightened with this Stylish Loft in Chic neighborhood	A beautiful place to stay at a seculeded location.	Larsonland	Alabama	Isle of Man	458.00	1	villa	4	3	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AhiUnolb7cg.jpg	47
57	Vintage Stylish Loft in Chic neighborhood	A lovely place to stay in the middle of the woods.	New Abigalemouth	Nebraska	Gambia	482.00	1	apartment	8	6	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_Rwb3barsoH8.jpg	57
67	Bright Mediterranean style apartment near the beach	A delightful place to stay a short walk from the beach.	Port Shannonmouth	Wyoming	Guyana	380.00	1	house	8	7	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AQl-J19ocWE.jpg	67
77	Charming Stylish Loft in Chic neighborhood	A beautiful place to stay in the heart of downtown.	Stantonfurt	Ohio	Tanzania	459.00	1	apartment	1	9	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_L0BaowhFe4c.jpg	77
87	Take a magic stroll through the city from this Stylish Loft in Chic neighborhood	A scenic place to stay a short walk from the beach.	Nolamouth	Pennsylvania	Uruguay	311.00	1	townhouse	12	3	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_r5pPYI6lEpA.jpg	87
97	Bright Townhouse with terrace	A beautiful place to stay at a seculeded location.	Wunschport	Illinois	Heard Island and McDonald Islands	190.00	1	house	12	2	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_HmREZuu4XuY.jpg	97
38	Take a magic stroll through the city from this Parisian studio in the heart of city	A lovely place to stay at a seculeded location.	West Lorenz	West Virginia	Tanzania	182.00	1	villa	5	5	6	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_YFQGWKW33Ck.jpg	38
48	Admire Stunning Ocean Views from a Stylish Loft in Chic neighborhood	A scenic place to stay in the middle of the woods.	East Valliemouth	Illinois	Djibouti	117.00	1	house	8	7	10	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_C_dRtsnBOQA.jpg	48
58	Vintage Stylish Loft in Chic neighborhood	A lovely place to stay a short walk from the beach.	Port Kiel	Massachusetts	Northern Mariana Islands	442.00	1	house	9	5	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_TD2DKbVP284.jpg	58
68	Let yourself be enlightened with this Studio apartment minutes from downtown	A delightful place to stay in the heart of downtown.	Dakotafurt	New York	Italy	113.00	1	apartment	6	1	2	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_AX-hGV70sd0.jpg	68
78	Admire Stunning Ocean Views from a Penthouse with breathtaking views of the mountains	A lovely place to stay in the middle of the woods.	Lake Haydenville	North Dakota	Cote d'Ivoire	239.00	1	villa	4	8	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_QGehbt2b6iQ.jpg	78
88	Stunning Stylish Loft in Chic neighborhood	A beautiful place to stay a short walk from the beach.	Deonland	North Dakota	Austria	442.00	1	house	9	7	4	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_zfgVn46-xJw.jpg	88
98	Vintage Mediterranean style apartment near the beach	A scenic place to stay at a seculeded location.	North Filibertobury	Nevada	Honduras	437.00	1	townhouse	9	1	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_I4ecJKp3eFw.jpg	98
30	Charming Studio apartment minutes from downtown	A scenic place to stay at a seculeded location.	Kattieville	Utah	Barbados	114.00	1	apartment	4	4	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GmEUEyISvd8.jpg	30
42	Charming Penthouse with breathtaking views of the mountains	A beautiful place to stay a short walk from the beach.	Lake Nicholaus	Kansas	Mali	393.00	1	house	5	6	8	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_kOYh8C_xLUQ.jpg	42
52	Immaculate Architect's Penthouse with breathtaking views of the mountains	A scenic place to stay a short walk from the beach.	Camillamouth	Vermont	Macao	322.00	1	apartment	7	3	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_GmEUEyISvd8.jpg	52
62	Vintage Studio apartment minutes from downtown	A scenic place to stay in the heart of downtown.	Leanneton	South Carolina	Greece	450.00	1	loft	7	7	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_gREquCUXQLI.jpg	62
72	Bright Artist's studio	A lovely place to stay a short walk from the beach.	Port Germanberg	Indiana	Seychelles	191.00	1	apartment	6	9	1	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_FqqiAvJejto.jpg	72
82	Immaculate Architect's Penthouse with breathtaking views of the mountains	A lovely place to stay in the heart of downtown.	East Marcellastad	Idaho	Bahamas	382.00	1	house	5	10	7	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_YFQGWKW33Ck.jpg	82
92	Modern Parisian studio in the heart of city	A beautiful place to stay in the heart of downtown.	Lake Hillary	Iowa	Gambia	453.00	1	house	6	1	3	https://s3.amazonaws.com/airbnbcloneinteriorphotos/536x910_C_dRtsnBOQA.jpg	92
\.


--
-- Name: hosts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.hosts_id_seq', 100, true);


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 39, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: listings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.listings_id_seq', 100, true);


--
-- Name: hosts hosts_pkey; Type: CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.hosts
    ADD CONSTRAINT hosts_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);


--
-- Name: listings listings_host_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_host_id_foreign FOREIGN KEY (host_id) REFERENCES public.hosts(id);


--
-- PostgreSQL database dump complete
--

