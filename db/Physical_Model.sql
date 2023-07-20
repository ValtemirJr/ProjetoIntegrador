PGDMP     8    1                {            CETAC    15.2    15.2 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18323    CETAC    DATABASE     ~   CREATE DATABASE "CETAC" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "CETAC";
                postgres    false            �            1259    18324    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    18407    anamnese    TABLE     X  CREATE TABLE public.anamnese (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    client_id integer NOT NULL,
    type character varying(255) NOT NULL,
    psychiatric_examination character varying(255) NOT NULL,
    disease_history character varying(255) NOT NULL,
    observation character varying(255) NOT NULL
);
    DROP TABLE public.anamnese;
       public         heap    postgres    false            �            1259    18406    anamnese_id_seq    SEQUENCE     �   CREATE SEQUENCE public.anamnese_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.anamnese_id_seq;
       public          postgres    false    230            �           0    0    anamnese_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.anamnese_id_seq OWNED BY public.anamnese.id;
          public          postgres    false    229            �            1259    18388    bills    TABLE       CREATE TABLE public.bills (
    id integer NOT NULL,
    due_date character varying(255) NOT NULL,
    pay_date character varying(255) NOT NULL,
    bills_type_id integer NOT NULL,
    method_payments_id integer NOT NULL,
    price numeric(10,2) NOT NULL
);
    DROP TABLE public.bills;
       public         heap    postgres    false            �            1259    18387    bills_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bills_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.bills_id_seq;
       public          postgres    false    228            �           0    0    bills_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.bills_id_seq OWNED BY public.bills.id;
          public          postgres    false    227            �            1259    18381 
   bills_type    TABLE     m   CREATE TABLE public.bills_type (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
    DROP TABLE public.bills_type;
       public         heap    postgres    false            �            1259    18380    bills_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bills_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.bills_type_id_seq;
       public          postgres    false    226            �           0    0    bills_type_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bills_type_id_seq OWNED BY public.bills_type.id;
          public          postgres    false    225            �            1259    18444    bundle    TABLE     �   CREATE TABLE public.bundle (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    client_id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    number_of_sessions integer NOT NULL
);
    DROP TABLE public.bundle;
       public         heap    postgres    false            �            1259    18443    bundle_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bundle_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.bundle_id_seq;
       public          postgres    false    236            �           0    0    bundle_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.bundle_id_seq OWNED BY public.bundle.id;
          public          postgres    false    235            �            1259    18458    bundle_service    TABLE     �   CREATE TABLE public.bundle_service (
    id integer NOT NULL,
    service_id integer NOT NULL,
    bundle_id integer NOT NULL
);
 "   DROP TABLE public.bundle_service;
       public         heap    postgres    false            �            1259    18457    bundle_service_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bundle_service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.bundle_service_id_seq;
       public          postgres    false    238            �           0    0    bundle_service_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.bundle_service_id_seq OWNED BY public.bundle_service.id;
          public          postgres    false    237            �            1259    18353    client    TABLE     	  CREATE TABLE public.client (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    phonenumber character varying(20) NOT NULL,
    cpf character varying(11),
    occupation character varying(50),
    marital_status_id integer,
    literacy character varying(255),
    address character varying(100),
    date_birth character varying(255),
    nacionality_id integer,
    goal character varying(255) NOT NULL,
    date_request character varying(255) NOT NULL
);
    DROP TABLE public.client;
       public         heap    postgres    false            �            1259    18352    client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.client_id_seq;
       public          postgres    false    222            �           0    0    client_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;
          public          postgres    false    221            �            1259    18346    marital_status    TABLE     q   CREATE TABLE public.marital_status (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
 "   DROP TABLE public.marital_status;
       public         heap    postgres    false            �            1259    18345    marital_status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.marital_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.marital_status_id_seq;
       public          postgres    false    220            �           0    0    marital_status_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.marital_status_id_seq OWNED BY public.marital_status.id;
          public          postgres    false    219            �            1259    18374    method_payments    TABLE     r   CREATE TABLE public.method_payments (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
 #   DROP TABLE public.method_payments;
       public         heap    postgres    false            �            1259    18373    method_payments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.method_payments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.method_payments_id_seq;
       public          postgres    false    224            �           0    0    method_payments_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.method_payments_id_seq OWNED BY public.method_payments.id;
          public          postgres    false    223            �            1259    18339    nacionality    TABLE     n   CREATE TABLE public.nacionality (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
    DROP TABLE public.nacionality;
       public         heap    postgres    false            �            1259    18338    nacionality_id_seq    SEQUENCE     �   CREATE SEQUENCE public.nacionality_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.nacionality_id_seq;
       public          postgres    false    218            �           0    0    nacionality_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.nacionality_id_seq OWNED BY public.nacionality.id;
          public          postgres    false    217            �            1259    18506    payments    TABLE     �   CREATE TABLE public.payments (
    id integer NOT NULL,
    scheduling_id integer NOT NULL,
    method_payment_id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    pay_date character varying(255) NOT NULL
);
    DROP TABLE public.payments;
       public         heap    postgres    false            �            1259    18505    payments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.payments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.payments_id_seq;
       public          postgres    false    244            �           0    0    payments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.payments_id_seq OWNED BY public.payments.id;
          public          postgres    false    243            �            1259    18482 
   scheduling    TABLE     0  CREATE TABLE public.scheduling (
    id integer NOT NULL,
    client_id integer NOT NULL,
    service_id integer NOT NULL,
    date_request character varying(255) NOT NULL,
    consultation_date character varying(255) NOT NULL,
    goal character varying(255) NOT NULL,
    status_id integer NOT NULL
);
    DROP TABLE public.scheduling;
       public         heap    postgres    false            �            1259    18481    scheduling_id_seq    SEQUENCE     �   CREATE SEQUENCE public.scheduling_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.scheduling_id_seq;
       public          postgres    false    242            �           0    0    scheduling_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.scheduling_id_seq OWNED BY public.scheduling.id;
          public          postgres    false    241            �            1259    18475    scheduling_status    TABLE     t   CREATE TABLE public.scheduling_status (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
 %   DROP TABLE public.scheduling_status;
       public         heap    postgres    false            �            1259    18474    scheduling_status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.scheduling_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.scheduling_status_id_seq;
       public          postgres    false    240            �           0    0    scheduling_status_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.scheduling_status_id_seq OWNED BY public.scheduling_status.id;
          public          postgres    false    239            �            1259    18430    service    TABLE     �   CREATE TABLE public.service (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    service_type_id integer NOT NULL,
    price numeric(10,2) NOT NULL
);
    DROP TABLE public.service;
       public         heap    postgres    false            �            1259    18429    service_id_seq    SEQUENCE     �   CREATE SEQUENCE public.service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.service_id_seq;
       public          postgres    false    234            �           0    0    service_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.service_id_seq OWNED BY public.service.id;
          public          postgres    false    233            �            1259    18423    service_type    TABLE     o   CREATE TABLE public.service_type (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);
     DROP TABLE public.service_type;
       public         heap    postgres    false            �            1259    18422    service_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.service_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.service_type_id_seq;
       public          postgres    false    232            �           0    0    service_type_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.service_type_id_seq OWNED BY public.service_type.id;
          public          postgres    false    231            �            1259    18330    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password_hash character varying(100) NOT NULL,
    user_type character varying(1) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18329    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    18410    anamnese id    DEFAULT     j   ALTER TABLE ONLY public.anamnese ALTER COLUMN id SET DEFAULT nextval('public.anamnese_id_seq'::regclass);
 :   ALTER TABLE public.anamnese ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    18391    bills id    DEFAULT     d   ALTER TABLE ONLY public.bills ALTER COLUMN id SET DEFAULT nextval('public.bills_id_seq'::regclass);
 7   ALTER TABLE public.bills ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    18384    bills_type id    DEFAULT     n   ALTER TABLE ONLY public.bills_type ALTER COLUMN id SET DEFAULT nextval('public.bills_type_id_seq'::regclass);
 <   ALTER TABLE public.bills_type ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    18447 	   bundle id    DEFAULT     f   ALTER TABLE ONLY public.bundle ALTER COLUMN id SET DEFAULT nextval('public.bundle_id_seq'::regclass);
 8   ALTER TABLE public.bundle ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    236    236            �           2604    18461    bundle_service id    DEFAULT     v   ALTER TABLE ONLY public.bundle_service ALTER COLUMN id SET DEFAULT nextval('public.bundle_service_id_seq'::regclass);
 @   ALTER TABLE public.bundle_service ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237    238            �           2604    18356 	   client id    DEFAULT     f   ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);
 8   ALTER TABLE public.client ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    18349    marital_status id    DEFAULT     v   ALTER TABLE ONLY public.marital_status ALTER COLUMN id SET DEFAULT nextval('public.marital_status_id_seq'::regclass);
 @   ALTER TABLE public.marital_status ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    18377    method_payments id    DEFAULT     x   ALTER TABLE ONLY public.method_payments ALTER COLUMN id SET DEFAULT nextval('public.method_payments_id_seq'::regclass);
 A   ALTER TABLE public.method_payments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    18342    nacionality id    DEFAULT     p   ALTER TABLE ONLY public.nacionality ALTER COLUMN id SET DEFAULT nextval('public.nacionality_id_seq'::regclass);
 =   ALTER TABLE public.nacionality ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    18509    payments id    DEFAULT     j   ALTER TABLE ONLY public.payments ALTER COLUMN id SET DEFAULT nextval('public.payments_id_seq'::regclass);
 :   ALTER TABLE public.payments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    243    244            �           2604    18485    scheduling id    DEFAULT     n   ALTER TABLE ONLY public.scheduling ALTER COLUMN id SET DEFAULT nextval('public.scheduling_id_seq'::regclass);
 <   ALTER TABLE public.scheduling ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            �           2604    18478    scheduling_status id    DEFAULT     |   ALTER TABLE ONLY public.scheduling_status ALTER COLUMN id SET DEFAULT nextval('public.scheduling_status_id_seq'::regclass);
 C   ALTER TABLE public.scheduling_status ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239    240            �           2604    18433 
   service id    DEFAULT     h   ALTER TABLE ONLY public.service ALTER COLUMN id SET DEFAULT nextval('public.service_id_seq'::regclass);
 9   ALTER TABLE public.service ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            �           2604    18426    service_type id    DEFAULT     r   ALTER TABLE ONLY public.service_type ALTER COLUMN id SET DEFAULT nextval('public.service_type_id_seq'::regclass);
 >   ALTER TABLE public.service_type ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    18333    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    18324    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   @�       �          0    18407    anamnese 
   TABLE DATA           {   COPY public.anamnese (id, description, client_id, type, psychiatric_examination, disease_history, observation) FROM stdin;
    public          postgres    false    230   �       �          0    18388    bills 
   TABLE DATA           a   COPY public.bills (id, due_date, pay_date, bills_type_id, method_payments_id, price) FROM stdin;
    public          postgres    false    228   "�       �          0    18381 
   bills_type 
   TABLE DATA           5   COPY public.bills_type (id, description) FROM stdin;
    public          postgres    false    226   ?�       �          0    18444    bundle 
   TABLE DATA           W   COPY public.bundle (id, description, client_id, price, number_of_sessions) FROM stdin;
    public          postgres    false    236   \�       �          0    18458    bundle_service 
   TABLE DATA           C   COPY public.bundle_service (id, service_id, bundle_id) FROM stdin;
    public          postgres    false    238   y�       �          0    18353    client 
   TABLE DATA           �   COPY public.client (id, name, email, phonenumber, cpf, occupation, marital_status_id, literacy, address, date_birth, nacionality_id, goal, date_request) FROM stdin;
    public          postgres    false    222   ��       �          0    18346    marital_status 
   TABLE DATA           9   COPY public.marital_status (id, description) FROM stdin;
    public          postgres    false    220   r�       �          0    18374    method_payments 
   TABLE DATA           :   COPY public.method_payments (id, description) FROM stdin;
    public          postgres    false    224   ̜       �          0    18339    nacionality 
   TABLE DATA           6   COPY public.nacionality (id, description) FROM stdin;
    public          postgres    false    218   �       �          0    18506    payments 
   TABLE DATA           Y   COPY public.payments (id, scheduling_id, method_payment_id, price, pay_date) FROM stdin;
    public          postgres    false    244   \�       �          0    18482 
   scheduling 
   TABLE DATA           q   COPY public.scheduling (id, client_id, service_id, date_request, consultation_date, goal, status_id) FROM stdin;
    public          postgres    false    242   y�       �          0    18475    scheduling_status 
   TABLE DATA           <   COPY public.scheduling_status (id, description) FROM stdin;
    public          postgres    false    240   ��       �          0    18430    service 
   TABLE DATA           J   COPY public.service (id, description, service_type_id, price) FROM stdin;
    public          postgres    false    234   ӝ       �          0    18423    service_type 
   TABLE DATA           7   COPY public.service_type (id, description) FROM stdin;
    public          postgres    false    232   �       �          0    18330    users 
   TABLE DATA           J   COPY public.users (id, name, email, password_hash, user_type) FROM stdin;
    public          postgres    false    216   N�       �           0    0    anamnese_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.anamnese_id_seq', 1, false);
          public          postgres    false    229            �           0    0    bills_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.bills_id_seq', 1, false);
          public          postgres    false    227            �           0    0    bills_type_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.bills_type_id_seq', 1, false);
          public          postgres    false    225            �           0    0    bundle_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.bundle_id_seq', 1, false);
          public          postgres    false    235            �           0    0    bundle_service_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.bundle_service_id_seq', 1, false);
          public          postgres    false    237            �           0    0    client_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.client_id_seq', 4, true);
          public          postgres    false    221            �           0    0    marital_status_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.marital_status_id_seq', 1, false);
          public          postgres    false    219            �           0    0    method_payments_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.method_payments_id_seq', 1, false);
          public          postgres    false    223            �           0    0    nacionality_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.nacionality_id_seq', 1, false);
          public          postgres    false    217            �           0    0    payments_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.payments_id_seq', 1, false);
          public          postgres    false    243            �           0    0    scheduling_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.scheduling_id_seq', 1, true);
          public          postgres    false    241            �           0    0    scheduling_status_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.scheduling_status_id_seq', 1, false);
          public          postgres    false    239            �           0    0    service_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.service_id_seq', 1, true);
          public          postgres    false    233            �           0    0    service_type_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.service_type_id_seq', 1, false);
          public          postgres    false    231            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            �           2606    18328     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            �           2606    18416 !   anamnese anamnese_description_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.anamnese
    ADD CONSTRAINT anamnese_description_key UNIQUE (description);
 K   ALTER TABLE ONLY public.anamnese DROP CONSTRAINT anamnese_description_key;
       public            postgres    false    230            �           2606    18414    anamnese anamnese_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.anamnese
    ADD CONSTRAINT anamnese_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.anamnese DROP CONSTRAINT anamnese_pkey;
       public            postgres    false    230            �           2606    18395    bills bills_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.bills DROP CONSTRAINT bills_pkey;
       public            postgres    false    228            �           2606    18386    bills_type bills_type_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bills_type
    ADD CONSTRAINT bills_type_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bills_type DROP CONSTRAINT bills_type_pkey;
       public            postgres    false    226            �           2606    18451    bundle bundle_description_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.bundle
    ADD CONSTRAINT bundle_description_key UNIQUE (description);
 G   ALTER TABLE ONLY public.bundle DROP CONSTRAINT bundle_description_key;
       public            postgres    false    236            �           2606    18449    bundle bundle_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.bundle
    ADD CONSTRAINT bundle_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.bundle DROP CONSTRAINT bundle_pkey;
       public            postgres    false    236            �           2606    18463 "   bundle_service bundle_service_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.bundle_service
    ADD CONSTRAINT bundle_service_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.bundle_service DROP CONSTRAINT bundle_service_pkey;
       public            postgres    false    238            �           2606    18362    client client_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.client DROP CONSTRAINT client_email_key;
       public            postgres    false    222            �           2606    18360    client client_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.client DROP CONSTRAINT client_pkey;
       public            postgres    false    222            �           2606    18351 "   marital_status marital_status_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.marital_status
    ADD CONSTRAINT marital_status_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.marital_status DROP CONSTRAINT marital_status_pkey;
       public            postgres    false    220            �           2606    18379 $   method_payments method_payments_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.method_payments
    ADD CONSTRAINT method_payments_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.method_payments DROP CONSTRAINT method_payments_pkey;
       public            postgres    false    224            �           2606    18344    nacionality nacionality_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.nacionality
    ADD CONSTRAINT nacionality_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.nacionality DROP CONSTRAINT nacionality_pkey;
       public            postgres    false    218            �           2606    18511    payments payments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_pkey;
       public            postgres    false    244            �           2606    18489    scheduling scheduling_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.scheduling
    ADD CONSTRAINT scheduling_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.scheduling DROP CONSTRAINT scheduling_pkey;
       public            postgres    false    242            �           2606    18480 (   scheduling_status scheduling_status_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.scheduling_status
    ADD CONSTRAINT scheduling_status_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.scheduling_status DROP CONSTRAINT scheduling_status_pkey;
       public            postgres    false    240            �           2606    18437    service service_description_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_description_key UNIQUE (description);
 I   ALTER TABLE ONLY public.service DROP CONSTRAINT service_description_key;
       public            postgres    false    234            �           2606    18435    service service_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.service DROP CONSTRAINT service_pkey;
       public            postgres    false    234            �           2606    18428    service_type service_type_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.service_type
    ADD CONSTRAINT service_type_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.service_type DROP CONSTRAINT service_type_pkey;
       public            postgres    false    232            �           2606    18337    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    18335    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    18417     anamnese anamnese_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.anamnese
    ADD CONSTRAINT anamnese_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.anamnese DROP CONSTRAINT anamnese_client_id_fkey;
       public          postgres    false    230    222    3275            �           2606    18396    bills bills_bills_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_bills_type_id_fkey FOREIGN KEY (bills_type_id) REFERENCES public.bills_type(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.bills DROP CONSTRAINT bills_bills_type_id_fkey;
       public          postgres    false    226    228    3279            �           2606    18401 #   bills bills_method_payments_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_method_payments_id_fkey FOREIGN KEY (method_payments_id) REFERENCES public.method_payments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.bills DROP CONSTRAINT bills_method_payments_id_fkey;
       public          postgres    false    228    3277    224            �           2606    18452    bundle bundle_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bundle
    ADD CONSTRAINT bundle_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.bundle DROP CONSTRAINT bundle_client_id_fkey;
       public          postgres    false    222    236    3275            �           2606    18469 ,   bundle_service bundle_service_bundle_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bundle_service
    ADD CONSTRAINT bundle_service_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.bundle(id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.bundle_service DROP CONSTRAINT bundle_service_bundle_id_fkey;
       public          postgres    false    236    238    3295            �           2606    18464 -   bundle_service bundle_service_service_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bundle_service
    ADD CONSTRAINT bundle_service_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id) ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public.bundle_service DROP CONSTRAINT bundle_service_service_id_fkey;
       public          postgres    false    238    3291    234            �           2606    18363 $   client client_marital_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_marital_status_id_fkey FOREIGN KEY (marital_status_id) REFERENCES public.marital_status(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.client DROP CONSTRAINT client_marital_status_id_fkey;
       public          postgres    false    222    3271    220            �           2606    18368 !   client client_nacionality_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_nacionality_id_fkey FOREIGN KEY (nacionality_id) REFERENCES public.nacionality(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.client DROP CONSTRAINT client_nacionality_id_fkey;
       public          postgres    false    3269    222    218            �           2606    18517 (   payments payments_method_payment_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_method_payment_id_fkey FOREIGN KEY (method_payment_id) REFERENCES public.method_payments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_method_payment_id_fkey;
       public          postgres    false    244    224    3277            �           2606    18512 $   payments payments_scheduling_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_scheduling_id_fkey FOREIGN KEY (scheduling_id) REFERENCES public.scheduling(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_scheduling_id_fkey;
       public          postgres    false    244    3301    242            �           2606    18490 $   scheduling scheduling_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.scheduling
    ADD CONSTRAINT scheduling_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.scheduling DROP CONSTRAINT scheduling_client_id_fkey;
       public          postgres    false    222    3275    242            �           2606    18495 %   scheduling scheduling_service_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.scheduling
    ADD CONSTRAINT scheduling_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.scheduling DROP CONSTRAINT scheduling_service_id_fkey;
       public          postgres    false    234    242    3291            �           2606    18500 $   scheduling scheduling_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.scheduling
    ADD CONSTRAINT scheduling_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.scheduling_status(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.scheduling DROP CONSTRAINT scheduling_status_id_fkey;
       public          postgres    false    242    3299    240            �           2606    18438 $   service service_service_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_service_type_id_fkey FOREIGN KEY (service_type_id) REFERENCES public.service_type(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.service DROP CONSTRAINT service_service_type_id_fkey;
       public          postgres    false    234    3287    232            �   �   x�m��
� ���.���rVry�E�AoB]ٿe��vXͰn�d�2HA��;v�[J����^Y�����j��]�*�P$�h/@���4�ݢ6�W��5�����m�;<�y��W��p�p�����A�\�T���<@��h��v��;���a�c�ƿn�{?4g(r���!_��{5      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   �   x�u��j�@E��WL����u�Ƥ0R�Y�1Z�5����	���0�g�{���$x.���'Y���͐^�~Ek:�jmz��u��F+��cގ9r�!#G2��O��2�V��(Tv�TIe�sL&\6��2���������e�����k������ť�������r*nI��ま�6l		9�	i�H2<ٵi���j&N�      �   J   x�3���)I�,��H��2�tN,NL��9]2��3�|ΰ�û��lS�м�Ë�\�K/,K������ �|�      �      x������ � �      �   c   x�3�t*J,��I�,�W�K,��2B)-J�ɬJL��2�t)-�IT�/U�=�+�$��KL���*IILI�2�H-JITHA�0�t-.)J�K����� ��*�      �      x������ � �      �      x������ � �      �   -   x�3�t��K�,�ML��2�tN�KN���9�Rs2�@�=... Z�      �   -  x�u�MN�0�דS�U��e[����*Ċ����.�-q%�8E/�ӄƢ��{3�`��1�9�Gy��p��9<��g>��mH��ӏa�j��&0��h
;�w�g��u���o=����w�<����!�aS�aE��L��������K[�}H*XW�!7�$�D}H�V�����8^��x-Lb�
?�xRut
���na�g[[��2���9,ْ!�?}������\��[�iy���3_b�*aˍO���uؾ9��o�c���[���8N��Xc�A��ذ��z	�2ʲ���      �   .   x�3�I-J,�L�2��M,.NLO��2�t-.9��$39�+F��� ��      �   �   x�]�A��0�s�+8pf��&1�A1����<�-�[4��~�n��mf2�7'I����j2e 8���7�AD�����Uc@uS5$d�!����7��_�˂�#{��,�6��1�U~)�~x��||�^��2���K�����]I;�s�4�{v)���\E�e�tx���r�&Z�V���Ļ;9ӯ�R��N�     