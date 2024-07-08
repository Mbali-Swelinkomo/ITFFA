--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Ubuntu 15.5-0ubuntu0.23.04.1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-0ubuntu0.23.04.1)

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

SET default_table_access_method = heap;

--
-- Name: applications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.applications (
    id integer NOT NULL,
    name character varying(255),
    surname character varying(255),
    mobile_number character varying(20),
    email character varying(255),
    gender character varying(50),
    ethnicity character varying(50),
    general_consent boolean,
    cover_letter text,
    resume text,
    other_documents text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.applications OWNER TO postgres;

--
-- Name: applications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.applications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.applications_id_seq OWNER TO postgres;

--
-- Name: applications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.applications_id_seq OWNED BY public.applications.id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    surname character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO myuser;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO myuser;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: applications id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications ALTER COLUMN id SET DEFAULT nextval('public.applications_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.applications (id, name, surname, mobile_number, email, gender, ethnicity, general_consent, cover_letter, resume, other_documents, created_at) FROM stdin;
1	Mbali	Swelinkomo	0737855330	mbaliswe17@gmail.com	Female	African	t	SELECT grantee, privilege_type \r\nFROM information_schema.role_table_grants \r\nWHERE table_name='applications';	uploads/1718197269095-Module Guide ITMSA4.pdf	uploads/1718197269097-Module Guide ITMSA4.pdf	2024-06-12 15:01:09.107459
2	Mbali	Swelinkomo	0737855330	mbaliswe17@gmail.com	Female	African	t	jnnjsd reikgbikst reiio;trn gn;'iotfgnwo' tjgnrfwjmw' 	uploads/1719514162988-Screenshot from 2024-06-26 18-54-48.png	uploads/1719514162989-Screenshot from 2024-06-26 19-02-06.png	2024-06-27 20:49:23.006076
3	John	Doe	0737855330	mbaliswe17@gmail.com	Male	African	t	Swelinkomo	uploads/1719516289637-Screenshot from 2024-06-26 19-02-06.png	uploads/1719516289643-Screenshot from 2024-06-26 18-54-48.png	2024-06-27 21:24:49.663885
4	Mbali	Swelinkomo	0737855330	mbaliswe17@gmail.com	Female	African	t	        router.push("/homepage") \r\n	uploads/1719606889876-Screenshot from 2024-06-26 18-55-12.png	uploads/1719606889877-Screenshot from 2024-06-26 19-02-06.png	2024-06-28 22:34:49.886039
5	Mbali	Testing	0737855330	mbaliswe17@gmail.com	Female	African	t	setUser	uploads/1719656994522-Screenshot from 2024-06-26 18-55-16.png	uploads/1719656994525-Screenshot from 2024-06-26 19-01-52.png	2024-06-29 12:29:54.534429
6	Mbali	Radebe	0737855330	mbaliswe17@gmail.com	Female	African	t	\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default MyApplications;\r\n	uploads/1719664992254-Screenshot from 2024-06-26 18-55-16.png	uploads/1719664992255-Screenshot from 2024-06-26 19-02-06.png	2024-06-29 14:43:12.270149
7	Mbali	Radebe	0737855330	mbaliswe17@gmail.com	Female	African	t	app.post('/api/login', async (req, res) => {\r\n  const { email, password } = req.body;\r\n\r\n  try {\r\n    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);\r\n    if (result.rows.length > 0) {\r\n  }\r\n});\r\n	uploads/1719855760498-Screenshot from 2024-06-25 14-15-01.png	uploads/1719855760498-Screenshot from 2024-06-26 19-01-52.png	2024-07-01 19:42:40.515606
8	Mbali	Swelinkomo	0737855330	mbaliswe17@gmail.com	Female	African	t	knfvkjnf.kae	uploads/1720440117642-Button.png	uploads/1720440117643-Button.png	2024-07-08 14:01:57.65881
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, sess, expire) FROM stdin;
rglnc93YA6PaNzcz7UvMPt4u_RhheYI7	{"cookie":{"originalMaxAge":null,"expires":null,"secure":false,"httpOnly":true,"path":"/"},"userEmail":"mbaliswe17@gmail.com"}	2024-07-05 15:11:10
5bnxCvcydeseuNdDxPAlO3BfOFeoMdK4	{"cookie":{"originalMaxAge":null,"expires":null,"secure":false,"httpOnly":true,"path":"/"},"userEmail":"mbaliswe17@gmail.com"}	2024-07-06 01:27:02
sL-N_evStJ3B6fibQqMiiounGG_wv0AQ	{"cookie":{"originalMaxAge":null,"expires":null,"secure":false,"httpOnly":true,"path":"/"},"userEmail":"mbaliswe17@gmail.com"}	2024-07-09 14:01:24
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.users (id, name, surname, email, password) FROM stdin;
1	test1	test	test@bhys.com	$2b$10$mebZcdUy0zbaTdGJM3P/XOfg0B0ImmIhF08yjb/MVEVTclRGe/kna
2	testing	testing	test@gmail.com	$2b$10$.GENJoLQA9zujhSUxoNs1OzCXAh1fXFt84e.vxQv/UxEWjEy/XE3e
4	abc	efg	abc@test.co.za	$2b$10$dM2UpDaPJpssGAy1V4NL1Olo7WI0E2vRTFmLTnIrzLgrT5zPR2pTC
5	jhx	efnccn g	ncdfxjh@gdj.co.za	$2b$10$qvzST832/di9sM1k9hcJ1u.75DFmrFAOQ/mWleaikPdmsfO8mCtpy
6	Thandeka	Radebe	thandeka.radebe@gmail.com	$2b$10$cMUBFH7p4DJWQT3SRiyGkOzC1Bl7Vt4jqzP6/.rWmI5ZYpHezpk02
9	Nth	Test	nthtest@gmail.com	$2b$10$XMzZY5wtofNMD1Uq1d2V8O8SMmWXkkEj8Waa7hxC5Gmgbdktvx03G
10	Muh	Tester	muhtest@gmail.com	$2b$10$Y.vjDVGlVGFzTZbx2zhn/O68ndBdnfsiEDBnJtXofN7euAqFOW/ui
11	Mbali	Radebe	mbaliswe17@gmail.com	$2b$10$Dx2oMbFC4I2CU9CmKtiWfeJvd2IBRivOqhyrykQeKCHjxayfXMu26
12	user	test	user.test@gmail.com	$2b$10$APlrOhasePodGJftxaLK8.bkoGCzz38TiYzD1pNmBMWPOFPt.FI4y
\.


--
-- Name: applications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.applications_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: applications applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO myuser;


--
-- Name: TABLE applications; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.applications TO myuser;


--
-- PostgreSQL database dump complete
--

