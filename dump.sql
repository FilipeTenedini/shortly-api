--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

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
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "viewsCount" integer DEFAULT 0
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (47, 10, 'https://ge.globo.com/playlist/assista-aos-nossos-principais-videos.ghtml#video-11635561-id', 'zkWnssXo8g', '2023-05-22 20:56:40.833', 2);
INSERT INTO public.urls VALUES (48, 10, 'https://ge.globo.com/playlist/assista-aos-nossos-principais-videos.ghtml#video-11635561-id', 'j8ZxWq7Zd7', '2023-05-22 20:56:49.57', 0);
INSERT INTO public.urls VALUES (39, 7, 'https://www.youtube.com/watch?v=vxTKxrrqlVw', 'rfeMyJy0x1', '2023-05-22 20:40:31.126', 3);
INSERT INTO public.urls VALUES (40, 7, 'https://pt.wikipedia.org/wiki/Luis_Alberto_Su%C3%A1rez', 'vV7aSanGuu', '2023-05-22 20:42:11.529', 1);
INSERT INTO public.urls VALUES (41, 7, 'https://ge.globo.com/rs/futebol/times/gremio/noticia/2023/05/21/suarez-marca-primeiro-gol-em-gre-nal-e-comemora-vitoria-do-gremio-dia-redondo.ghtml', 'TJBkTmQ7ui', '2023-05-22 20:42:58.37', 0);
INSERT INTO public.urls VALUES (42, 9, 'https://ge.globo.com/rs/futebol/times/gremio/noticia/2023/05/21/suarez-marca-primeiro-gol-em-gre-nal-e-comemora-vitoria-do-gremio-dia-redondo.ghtml', 'LIuYVano0D', '2023-05-22 20:43:27.189', 2);
INSERT INTO public.urls VALUES (43, 9, 'https://ge.globo.com/', 'ew_Q7wTqZd', '2023-05-22 20:43:59.921', 1);
INSERT INTO public.urls VALUES (44, 6, 'https://www.youtube.com/watch?v=5CjOjZSKrqE', 'aFa2ZKxixC', '2023-05-22 20:45:24.501', 1);
INSERT INTO public.urls VALUES (45, 6, 'https://ge.globo.com/playlist/assista-aos-nossos-principais-videos.ghtml#video-11635561-id', 'b0wnPwYMvJ', '2023-05-22 20:45:44.54', 1);
INSERT INTO public.urls VALUES (46, 10, 'https://ge.globo.com/playlist/assista-aos-nossos-principais-videos.ghtml#video-11635561-id', 'W__m1oJIhh', '2023-05-22 20:56:01.287', 5);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (6, 'mel', 'memes2assl@gmail.com', '$2b$10$pqFXHjcuBUAmPfFdHgbx6egumV/UKWeKOMBXp0GU/144HqfWO02LK', '2023-05-22 20:35:27.621');
INSERT INTO public.users VALUES (7, 'lipe', 'lipe@gmail.com', '$2b$10$OJbJYYoqntp3o7gSeCzkNeodRKoPVnSqUPr7jE7wxP9VaLYID.8Li', '2023-05-22 20:35:36.313');
INSERT INTO public.users VALUES (8, 'faiska', 'faiska@gmail.com', '$2b$10$Qv3fUlU.1tpFKfmHw8lCiuKWEo7gc4cbNWBUuZTNmVhVoGConozYy', '2023-05-22 20:35:42.685');
INSERT INTO public.users VALUES (9, 'haru', 'haru@gmail.com', '$2b$10$/SxVG1uham/2GxTNeqqH/es.jRTLmNgDTs..uBWiaOfeAzNR8km6G', '2023-05-22 20:35:58.076');
INSERT INTO public.users VALUES (10, 'leo', 'leo@gmail.com', '$2b$10$EIjdiJKZ/wu6mlnnLoO0Oes7q7XIKkpLaKARmreYh4KjV14EztzPi', '2023-05-22 20:52:31.322');
INSERT INTO public.users VALUES (11, 'hafru', 'hafru@gmail.com', '$2b$10$GR9ooch2kgyvRFHkmIexDOFYdM9v5JbEoMpcFqt7jBZVo3OlZT/se', '2023-05-22 20:52:37.477');
INSERT INTO public.users VALUES (12, 'drvs', 'drvs@gmail.com', '$2b$10$GSh8geJ97R4TOh3ePbjPM.hGcL8ZGIUpK125FwU13Pl.1dVn9I/rq', '2023-05-22 20:52:44.645');
INSERT INTO public.users VALUES (13, 'senac rs', 'senac@gmail.com', '$2b$10$e3wwxH0X3qB9O76qfxfTI.7HAZS/N96tNeZ.u30nDl.lkulxVQky6', '2023-05-22 20:52:56.196');
INSERT INTO public.users VALUES (14, 'tmr', 'tmr@gmail.com', '$2b$10$RHHQMh4PY7l.WWANR3xc/.xz9wv5B6cI8XZ.N92xhBKc2M6W0Line', '2023-05-22 20:53:04.529');
INSERT INTO public.users VALUES (15, 'vini jr', 'vinijr@gmail.com', '$2b$10$6I2bo023aUGz4KDHQLhtEekW4XrSlReFt29zBayxkZHtwIp28Rvw2', '2023-05-22 20:53:25.926');
INSERT INTO public.users VALUES (16, 'ronaldo', 'r10@gmail.com', '$2b$10$NWa4BDxBfZKdBB0LDeCHX.xep9p6ebTkLgyW0Wo3fWCyh87rbG5xe', '2023-05-22 20:53:41.189');
INSERT INTO public.users VALUES (17, 'xis', 'xis@gmail.com', '$2b$10$rvx/Qm3I.zFy.ENpx2hQ5u5JHlN9QrD4IrtlK3Kg25NnjQsfxPeYK', '2023-05-22 20:53:59.337');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 48, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 17, true);


--
-- Name: urls unique_shorturl; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT unique_shorturl UNIQUE ("shortUrl");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls fk_userid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT fk_userid FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

