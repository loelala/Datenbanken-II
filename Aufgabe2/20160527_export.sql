--------------------------------------------------------
--  Datei erstellt -Freitag-Mai-27-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Type ADRESSET
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."ADRESSET" as Object
  ( Adresse_Strasse VARCHAR2(50),
    Adresse_Haus_Nr VARCHAR2(25),
    Adresse_Ort VARCHAR2(50),
    Adresse_Plz NUMBER(5,0)) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type CS_AREA_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_AREA_LIST_T" as table of VARCHAR2(3);

/
--------------------------------------------------------
--  DDL for Type CS_CASUAL_EMPLOYEE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_CASUAL_EMPLOYEE_T" under CS_Employee_T (
                                                        Emp_Hourly_Wage NUMBER(10,2));

/
--------------------------------------------------------
--  DDL for Type CS_COMPANY_BASE_TYPE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_COMPANY_BASE_TYPE_T" as Object ( Type_Desc VARCHAR2(40)) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type CS_COMPANY_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_COMPANY_T" as Object (
                                  Comp_ID NUMBER(1,0),
                                  Comp_Name VARCHAR2(50),
                                  Comp_Address ADRESSET,
                                  Comp_Phone CS_PhoneList_T,
                                  Comp_Fax CS_PhoneList_T,
                                  Comp_Type CS_Company_Base_Type_T,
                                  Comp_Shares CS_Share_List_T,
                                  Comp_Directors CS_Director_List_T,
                                  Comp_Managers CS_Manager_List_T,
                                  Comp_Stores CS_Store_List_T);

/
--------------------------------------------------------
--  DDL for Type CS_COMPANY_TYPE1_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_COMPANY_TYPE1_T" under CS_Company_Base_Type_T ( Area CS_Area_List_T);

/
--------------------------------------------------------
--  DDL for Type CS_COMPANY_TYPE2_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_COMPANY_TYPE2_T" under CS_Company_Base_Type_T ( Market VARCHAR2(6));

/
--------------------------------------------------------
--  DDL for Type CS_CUSTOMER_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_CUSTOMER_T" as Object (
                                      Cust_ID VARCHAR2(5),
                                      Cust_Name VARCHAR2(30),
                                      Cust_Address ADRESSET,
                                      Cust_Phone VARCHAR(10),
                                      Cust_Gender VARCHAR(1),
                                      Cust_DOB DATE,
                                      Cust_Bonuspoints NUMBER(10,0));

/
--------------------------------------------------------
--  DDL for Type CS_DEPARTMENT_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_DEPARTMENT_LIST_T" as table of CS_Department_T;

/
--------------------------------------------------------
--  DDL for Type CS_DEPARTMENT_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_DEPARTMENT_T" as Object ( 
                                        Dept_ID NUMBER(2,0),
                                        Dept_Name VARCHAR2(20),
                                        Dept_Head REF CS_Employee_T);

/
--------------------------------------------------------
--  DDL for Type CS_DIRECTOR_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_DIRECTOR_LIST_T" as Table of CS_Director_T;

/
--------------------------------------------------------
--  DDL for Type CS_DIRECTOR_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_DIRECTOR_T" as Object (
                                      ManagEmployee REF CS_ManagingEmployee_T,
                                      Bonus BINARY_DOUBLE);

/
--------------------------------------------------------
--  DDL for Type CS_EMPLOYEES_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_EMPLOYEES_LIST_T" as table of REF CS_Employee_T;

/
--------------------------------------------------------
--  DDL for Type CS_EMPLOYEE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_EMPLOYEE_T" as Object ( 
                                      Emp_ID VARCHAR2(6),
                                      Emp_Name VARCHAR(30),
                                      Emp_Addresse ADRESSET,
                                      Emp_Phone VARCHAR2(10)) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type CS_FULLTIME_EMPLOYEE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_FULLTIME_EMPLOYEE_T" under CS_Employee_T (
                                                          Emp_Anual_Wage NUMBER(10,2),
                                                          Emp_Bonus NUMBER(10,2));

/
--------------------------------------------------------
--  DDL for Type CS_ITEM_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_ITEM_T" as Object (
                                  Item_ID VARCHAR2(6),
                                  Item_Name VARCHAR2(30),
                                  Item_Desc VARCHAR2(128),
                                  Item_Cost NUMBER(10,2),
                                  Item_Price NUMBER(10,2),
                                  Item_Maker REF CS_Maker_T);

/
--------------------------------------------------------
--  DDL for Type CS_MAKER_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_MAKER_T" as Object (
                                   Maker_ID VARCHAR2(3),
                                   Maker_Name VARCHAR2(30),
                                   Maker_Address ADRESSET,
                                   Maker_Phone VARCHAR(10));

/
--------------------------------------------------------
--  DDL for Type CS_MANAGER_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_MANAGER_LIST_T" as Table of CS_Manager_T;

/
--------------------------------------------------------
--  DDL for Type CS_MANAGER_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_MANAGER_T" as Object (
                                      Manag_Employee REF CS_ManagingEmployee_T,
                                      Manag_Type VARCHAR2(40),
                                      Manag_YearlySalary NUMBER(8,2));

/
--------------------------------------------------------
--  DDL for Type CS_MANAGINGEMPLOYEE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_MANAGINGEMPLOYEE_T" as Object (
                                    Manag_ID NUMBER(4,0),
                                    Manag_Name VARCHAR2(30),
                                    Manag_Address ADRESSET,
                                    Manag_Phone VARCHAR(10));

/
--------------------------------------------------------
--  DDL for Type CS_PARTTIME_EMPLOYEE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_PARTTIME_EMPLOYEE_T" under CS_Employee_T (
                                                          Emp_Weekly_Wage NUMBER(10,2));

/
--------------------------------------------------------
--  DDL for Type CS_PHONELIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_PHONELIST_T" as table of VARCHAR2(10);

/
--------------------------------------------------------
--  DDL for Type CS_SHAREHOLDER_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_SHAREHOLDER_T" as Object ( 
                                        Shareholder_Id NUMBER(3,0),
                                        Shareholder_Name VARCHAR2(30),
                                        Shareholder_Address ADRESSET,
                                        Shareholder_Phone VARCHAR(10));

/
--------------------------------------------------------
--  DDL for Type CS_SHARE_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_SHARE_LIST_T" as table of CS_Share_T;

/
--------------------------------------------------------
--  DDL for Type CS_SHARE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_SHARE_T" as Object ( Shareholder REF CS_Shareholder_T,
                                Amount NUMBER(9,2));

/
--------------------------------------------------------
--  DDL for Type CS_STOCK_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_STOCK_LIST_T" as table of CS_Stock_T;

/
--------------------------------------------------------
--  DDL for Type CS_STOCK_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_STOCK_T" as Object (
                                    Stock_Item REF CS_Item_T,
                                    Stock_Inventory NUMBER(10,0));

/
--------------------------------------------------------
--  DDL for Type CS_STORE_LIST_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_STORE_LIST_T" as Table of CS_Store_T;

/
--------------------------------------------------------
--  DDL for Type CS_STORE_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_STORE_T" as Object (  
                                  Store_ID VARCHAR2(3),
                                  Store_Location VARCHAR2(25),
                                  Store_Address ADRESSET,
                                  Store_Phone VARCHAR(10),
                                  Store_Manager REF CS_Employee_T,
                                  Store_Employees CS_Employees_List_T,
                                  Store_Departments CS_Department_List_T,
                                  Store_Stock CS_Stock_List_T);

/
--------------------------------------------------------
--  DDL for Type CS_TRANSACTION_T
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."CS_TRANSACTION_T" as Object (
                                          Trans_ID NUMBER(10,0),
                                          Trans_Date DATE,
                                          Trans_Quantity NUMBER(10,0),
                                          Trans_Customer REF CS_Customer_T,
                                          Trans_Item REF CS_Item_T);

/
--------------------------------------------------------
--  DDL for Type KONTENLISTET
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTENLISTET" as Table of REF KontoT;

/
--------------------------------------------------------
--  DDL for Type KONTENLISTET_V2
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTENLISTET_V2" as Table of REF KontoT_v2;

/
--------------------------------------------------------
--  DDL for Type KONTENLISTET_V3
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTENLISTET_V3" as Table of KontoT_v3;

/
--------------------------------------------------------
--  DDL for Type KONTOT
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTOT" as Object
  ( Konto_Art VARCHAR2(50),
    Konto_Nr NUMBER(9,0),
    Konto_Stand NUMBER) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type KONTOT_V2
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTOT_V2" as Object
  ( Konto_v2_Konto REF KontoT,
    Konto_v2_Kunden_Liste KUNDENLISTET_V2) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type KONTOT_V3
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KONTOT_V3" under KontoT
  ( Konto_v3_Kunden_Liste KUNDENLISTET_V2) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type KUNDENLISTET_V2
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KUNDENLISTET_V2" as Table of REF KUNDET_V2;

/
--------------------------------------------------------
--  DDL for Type KUNDET_V1
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KUNDET_V1" as Object 
  ( KUNDE_V1_Nr NUMBER(4,0),
    KUNDE_V1_Name VARCHAR2(50),
    KUNDE_V1_Status VARCHAR2(25),
    KUNDE_V1_Adresse REF AdresseT,
    KUNDE_V1_Konten_Liste KontenListeT) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type KUNDET_V2
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."KUNDET_V2" as Object 
  ( KUNDE_V2_Nr NUMBER(4,0),
    KUNDE_V2_Name VARCHAR2(50),
    KUNDE_V2_Status VARCHAR2(25),
    KUNDE_V2_Adresse REF AdresseT) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type ZWEIGSTELLET_V1
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."ZWEIGSTELLET_V1" as Object
  ( ZWEIGSTELLE_V1_Name VARCHAR2(50),
    ZWEIGSTELLE_V1_Leiter VARCHAR2(50),
    ZWEIGSTELLE_V1_Adresse REF AdresseT,
    ZWEIGSTELLE_V1_Konten_Liste KontenListeT) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type ZWEIGSTELLET_V2
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."ZWEIGSTELLET_V2" as Object
  ( ZWEIGSTELLE_V2_Name VARCHAR2(50),
    ZWEIGSTELLE_V2_Leiter VARCHAR2(50),
    ZWEIGSTELLE_V2_Adresse REF AdresseT,
    ZWEIGSTELLE_V2_Konten_Liste KONTENLISTET_V2) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Type ZWEIGSTELLET_V3
--------------------------------------------------------

  CREATE OR REPLACE TYPE "DBST49"."ZWEIGSTELLET_V3" as Object
  ( ZWEIGSTELLE_V3_Name VARCHAR2(50),
    ZWEIGSTELLE_V3_Leiter VARCHAR2(50),
    ZWEIGSTELLE_V3_Adresse REF AdresseT,
    ZWEIGSTELLE_V3_Konten_Liste KONTENLISTET_V3) NOT FINAL;

/
--------------------------------------------------------
--  DDL for Table ADRESSE
--------------------------------------------------------

  CREATE TABLE "DBST49"."ADRESSE" OF "DBST49"."ADRESSET" 
 ;
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_DIRECTORS_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE COMP_DIRECTORS_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_FAX_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE COMP_FAX_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_MANAGERS_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE COMP_MANAGERS_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_PHONE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE COMP_PHONE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_SHARES_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE COMP_SHARES_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.COMP_STORES_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE UNIQUE INDEX SYS_C00162014 ON COMP_STORES_NT (STORE_STOCK ASC) 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 2 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOPARALLEL
CREATE UNIQUE INDEX SYS_C00162015 ON COMP_STORES_NT (STORE_DEPARTMENTS ASC) 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 2 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOPARALLEL
CREATE UNIQUE INDEX SYS_C00162016 ON COMP_STORES_NT (STORE_EMPLOYEES ASC) 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 2 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOPARALLELCREATE TABLE COMP_STORES_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
--------------------------------------------------------
--  DDL for Table CS_COMPANY
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_COMPANY" OF "DBST49"."CS_COMPANY_T" 
 
 NESTED TABLE "COMP_PHONE" STORE AS "COMP_PHONE_NT"
 RETURN AS VALUE
 NESTED TABLE "COMP_FAX" STORE AS "COMP_FAX_NT"
 RETURN AS VALUE
 NESTED TABLE TREAT("COMP_TYPE" AS "CS_COMPANY_TYPE1_T")."AREA" STORE AS "SYSNTCkCIquf5Rjy7VEVMsltHmw=="
 RETURN AS VALUE
 NESTED TABLE "COMP_SHARES" STORE AS "COMP_SHARES_NT"
 RETURN AS VALUE
 NESTED TABLE "COMP_DIRECTORS" STORE AS "COMP_DIRECTORS_NT"
 RETURN AS VALUE
 NESTED TABLE "COMP_MANAGERS" STORE AS "COMP_MANAGERS_NT"
 RETURN AS VALUE
 NESTED TABLE "COMP_STORES" STORE AS "COMP_STORES_NT"
 (
 NESTED TABLE "STORE_EMPLOYEES" STORE AS "STORE_EMPLOYEES_NT"
 RETURN AS VALUE
 NESTED TABLE "STORE_DEPARTMENTS" STORE AS "STORE_DEPARTMENTS_NT"
 RETURN AS VALUE
 NESTED TABLE "STORE_STOCK" STORE AS "STORE_STOCK_NT"
 RETURN AS VALUE) RETURN AS VALUE;
--------------------------------------------------------
--  DDL for Table CS_CUSTOMER
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_CUSTOMER" OF "DBST49"."CS_CUSTOMER_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_EMPLOYEE
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_EMPLOYEE" OF "DBST49"."CS_EMPLOYEE_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_ITEM
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_ITEM" OF "DBST49"."CS_ITEM_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_MAKER
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_MAKER" OF "DBST49"."CS_MAKER_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_MANAGINGEMPLOYEE
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_MANAGINGEMPLOYEE" OF "DBST49"."CS_MANAGINGEMPLOYEE_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_SHAREHOLDER
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_SHAREHOLDER" OF "DBST49"."CS_SHAREHOLDER_T" 
 ;
--------------------------------------------------------
--  DDL for Table CS_TRANSACTION
--------------------------------------------------------

  CREATE TABLE "DBST49"."CS_TRANSACTION" OF "DBST49"."CS_TRANSACTION_T" 
 ;
--------------------------------------------------------
--  DDL for Table KONTO
--------------------------------------------------------

  CREATE TABLE "DBST49"."KONTO" OF "DBST49"."KONTOT" 
 
 NESTED TABLE TREAT(SYS_NC_ROWINFO$ AS "DBST49"."KONTOT_V3")."KONTO_V2_KUNDEN_LISTE" STORE AS "SYSNTtYZ0QYSgTtiGYXXWGW9+qQ=="
 RETURN AS VALUE;
--------------------------------------------------------
--  DDL for Table KONTO_V2
--------------------------------------------------------

  CREATE TABLE "DBST49"."KONTO_V2" OF "DBST49"."KONTOT_V2" 
 
 NESTED TABLE "KONTO_V2_KUNDEN_LISTE" STORE AS "KONTO_V2_KUNDEN_LISTE_NT"
 RETURN AS VALUE;
-- Wiedergabe von TABLE DDL für Objekt DBST49.KONTO_V2_KUNDEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE KONTO_V2_KUNDEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.KONTO_V3_KUNDEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE KONTO_V3_KUNDEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
--------------------------------------------------------
--  DDL for Table KUNDE_V1
--------------------------------------------------------

  CREATE TABLE "DBST49"."KUNDE_V1" OF "DBST49"."KUNDET_V1" 
 
 NESTED TABLE "KUNDE_V1_KONTEN_LISTE" STORE AS "KUNDE_V1_KONTEN_LISTE_NT"
 RETURN AS VALUE;
-- Wiedergabe von TABLE DDL für Objekt DBST49.KUNDE_V1_KONTEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE KUNDE_V1_KONTEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
--------------------------------------------------------
--  DDL for Table KUNDE_V2
--------------------------------------------------------

  CREATE TABLE "DBST49"."KUNDE_V2" OF "DBST49"."KUNDET_V2" 
 ;
-- Wiedergabe von TABLE DDL für Objekt DBST49.STORE_DEPARTMENTS_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE STORE_DEPARTMENTS_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.STORE_EMPLOYEES_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE STORE_EMPLOYEES_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.STORE_STOCK_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE STORE_STOCK_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.SYSNTCkCIquf5Rjy7VEVMsltHmw== nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE "SYSNTCkCIquf5Rjy7VEVMsltHmw==" 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.SYSNTtYZ0QYSgTtiGYXXWGW9+qQ== nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE "SYSNTtYZ0QYSgTtiGYXXWGW9+qQ==" 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
--------------------------------------------------------
--  DDL for Table ZWEIGSTELLE_V1
--------------------------------------------------------

  CREATE TABLE "DBST49"."ZWEIGSTELLE_V1" OF "DBST49"."ZWEIGSTELLET_V1" 
 
 NESTED TABLE "ZWEIGSTELLE_V1_KONTEN_LISTE" STORE AS "ZWEIG_V1_KONTEN_LISTE_NT"
 RETURN AS VALUE;
--------------------------------------------------------
--  DDL for Table ZWEIGSTELLE_V2
--------------------------------------------------------

  CREATE TABLE "DBST49"."ZWEIGSTELLE_V2" OF "DBST49"."ZWEIGSTELLET_V2" 
 
 NESTED TABLE "ZWEIGSTELLE_V2_KONTEN_LISTE" STORE AS "ZWEIGSTELLE_V2_KONTEN_LISTE_NT"
 RETURN AS VALUE;
-- Wiedergabe von TABLE DDL für Objekt DBST49.ZWEIGSTELLE_V2_KONTEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE ZWEIGSTELLE_V2_KONTEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
--------------------------------------------------------
--  DDL for Table ZWEIGSTELLE_V3
--------------------------------------------------------

  CREATE TABLE "DBST49"."ZWEIGSTELLE_V3" OF "DBST49"."ZWEIGSTELLET_V3" 
 
 NESTED TABLE "ZWEIGSTELLE_V3_KONTEN_LISTE" STORE AS "ZWEIGSTELLE_V3_KONTEN_LISTE_NT"
 (
 NESTED TABLE "KONTO_V3_KUNDEN_LISTE" STORE AS "KONTO_V3_KUNDEN_LISTE_NT"
 RETURN AS VALUE) RETURN AS VALUE;
-- Wiedergabe von TABLE DDL für Objekt DBST49.ZWEIGSTELLE_V3_KONTEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE UNIQUE INDEX SYS_C00159653 ON ZWEIGSTELLE_V3_KONTEN_LISTE_NT (KONTO_V3_KUNDEN_LISTE ASC) 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 2 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOPARALLELCREATE TABLE ZWEIGSTELLE_V3_KONTEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
-- Wiedergabe von TABLE DDL für Objekt DBST49.ZWEIG_V1_KONTEN_LISTE_NT nicht möglich, da DBMS_METADATA internen Generator versucht.
CREATE TABLE ZWEIG_V1_KONTEN_LISTE_NT 
LOGGING 
TABLESPACE "USERS" 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1 
  MAXEXTENTS UNLIMITED 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NOPARALLEL
REM INSERTING into DBST49.ADRESSE
SET DEFINE OFF;
Insert into DBST49.ADRESSE (ADRESSE_STRASSE,ADRESSE_HAUS_NR,ADRESSE_ORT,ADRESSE_PLZ) values ('Eschenweg','12','Landshut','66666');
Insert into DBST49.ADRESSE (ADRESSE_STRASSE,ADRESSE_HAUS_NR,ADRESSE_ORT,ADRESSE_PLZ) values ('Hochstr.','1','Bachdorf','99999');
Insert into DBST49.ADRESSE (ADRESSE_STRASSE,ADRESSE_HAUS_NR,ADRESSE_ORT,ADRESSE_PLZ) values ('Münchnersrt.','33','Muenchen','77777');
Insert into DBST49.ADRESSE (ADRESSE_STRASSE,ADRESSE_HAUS_NR,ADRESSE_ORT,ADRESSE_PLZ) values ('Schellingstr.','42','Regensburg','55555');
Insert into DBST49.ADRESSE (ADRESSE_STRASSE,ADRESSE_HAUS_NR,ADRESSE_ORT,ADRESSE_PLZ) values ('Simseestr.','3','Riedering','88888');
REM INSERTING into DBST49.CS_COMPANY
SET DEFINE OFF;
REM INSERTING into DBST49.CS_CUSTOMER
SET DEFINE OFF;
REM INSERTING into DBST49.CS_EMPLOYEE
SET DEFINE OFF;
Insert into DBST49.CS_EMPLOYEE (EMP_ID,EMP_NAME,EMP_ADDRESSE,EMP_PHONE) values ('TestID','TestName',DBST49.ADRESSET('Test','Test','Test',98765),'TestPhonNr');
REM INSERTING into DBST49.CS_ITEM
SET DEFINE OFF;
REM INSERTING into DBST49.CS_MAKER
SET DEFINE OFF;
REM INSERTING into DBST49.CS_MANAGINGEMPLOYEE
SET DEFINE OFF;
REM INSERTING into DBST49.CS_SHAREHOLDER
SET DEFINE OFF;
REM INSERTING into DBST49.CS_TRANSACTION
SET DEFINE OFF;
REM INSERTING into DBST49.KONTO
SET DEFINE OFF;
REM INSERTING into DBST49.KONTO_V2
SET DEFINE OFF;
Insert into DBST49.KONTO_V2 (KONTO_V2_KONTO,KONTO_V2_KUNDEN_LISTE) values (REM INSERTING into DBST49.KUNDE_V1
SET DEFINE OFF;
Insert into DBST49.KUNDE_V1 (KUNDE_V1_NR,KUNDE_V1_NAME,KUNDE_V1_STATUS,KUNDE_V1_ADRESSE,KUNDE_V1_KONTEN_LISTE) values ('2345','H. Fach','Geschäftskunde','DBST49.ADRESSET(''Münchnersrt.'',''33'',''Muenchen'',77777)',DBST49.KONTENLISTET(null,null));
Insert into DBST49.KUNDE_V1 (KUNDE_V1_NR,KUNDE_V1_NAME,KUNDE_V1_STATUS,KUNDE_V1_ADRESSE,KUNDE_V1_KONTEN_LISTE) values ('7654','B. Meier','Privatkunde','DBST49.ADRESSET(''Eschenweg'',''12'',''Landshut'',66666)',DBST49.KONTENLISTET(null));
Insert into DBST49.KUNDE_V1 (KUNDE_V1_NR,KUNDE_V1_NAME,KUNDE_V1_STATUS,KUNDE_V1_ADRESSE,KUNDE_V1_KONTEN_LISTE) values ('8764','J. Wiesner','Geschäftskunde','DBST49.ADRESSET(''Schellingstr.'',''42'',''Regensburg'',55555)',DBST49.KONTENLISTET(null,null,null));
REM INSERTING into DBST49.KUNDE_V2
SET DEFINE OFF;
Insert into DBST49.KUNDE_V2 (KUNDE_V2_NR,KUNDE_V2_NAME,KUNDE_V2_STATUS,KUNDE_V2_ADRESSE) values ('2345','H. Fach','Geschäftskunde','DBST49.ADRESSET(''Münchnersrt.'',''33'',''Muenchen'',77777)');
Insert into DBST49.KUNDE_V2 (KUNDE_V2_NR,KUNDE_V2_NAME,KUNDE_V2_STATUS,KUNDE_V2_ADRESSE) values ('7654','B. Meier','Privatkunde','DBST49.ADRESSET(''Eschenweg'',''12'',''Landshut'',66666)');
Insert into DBST49.KUNDE_V2 (KUNDE_V2_NR,KUNDE_V2_NAME,KUNDE_V2_STATUS,KUNDE_V2_ADRESSE) values ('8764','J. Wiesner','Geschäftskunde','DBST49.ADRESSET(''Schellingstr.'',''42'',''Regensburg'',55555)');
REM INSERTING into DBST49.ZWEIGSTELLE_V1
SET DEFINE OFF;
Insert into DBST49.ZWEIGSTELLE_V1 (ZWEIGSTELLE_V1_NAME,ZWEIGSTELLE_V1_LEITER,ZWEIGSTELLE_V1_ADRESSE,ZWEIGSTELLE_V1_KONTEN_LISTE) values ('Bachdorf','1768','DBST49.ADRESSET(''Hochstr.'',''1'',''Bachdorf'',99999)',DBST49.KONTENLISTET(null,null,null));
Insert into DBST49.ZWEIGSTELLE_V1 (ZWEIGSTELLE_V1_NAME,ZWEIGSTELLE_V1_LEITER,ZWEIGSTELLE_V1_ADRESSE,ZWEIGSTELLE_V1_KONTEN_LISTE) values ('Riedering','9823','DBST49.ADRESSET(''Simseestr.'',''3'',''Riedering'',88888)',DBST49.KONTENLISTET(null,null));
REM INSERTING into DBST49.ZWEIGSTELLE_V2
SET DEFINE OFF;
Insert into DBST49.ZWEIGSTELLE_V2 (ZWEIGSTELLE_V2_NAME,ZWEIGSTELLE_V2_LEITER,ZWEIGSTELLE_V2_ADRESSE,ZWEIGSTELLE_V2_KONTEN_LISTE) values ('Bachdorf','1768','DBST49.ADRESSET(''Hochstr.'',''1'',''Bachdorf'',99999)',DBST49.KONTENLISTET_V2(DBST49.KONTOT_V2('oracle.sql.REF@533c4f08',DBST49.KUNDENLISTET_V2(oracle.sql.REF@3a44958)),DBST49.KONTOT_V2('oracle.sql.REF@34ff46b8',DBST49.KUNDENLISTET_V2(oracle.sql.REF@3a44958,oracle.sql.REF@5814496f)),DBST49.KONTOT_V2('oracle.sql.REF@d63f4a66',DBST49.KUNDENLISTET_V2(oracle.sql.REF@5814496f))));
Insert into DBST49.ZWEIGSTELLE_V2 (ZWEIGSTELLE_V2_NAME,ZWEIGSTELLE_V2_LEITER,ZWEIGSTELLE_V2_ADRESSE,ZWEIGSTELLE_V2_KONTEN_LISTE) values ('Riedering','9823','DBST49.ADRESSET(''Simseestr.'',''3'',''Riedering'',88888)',DBST49.KONTENLISTET_V2(DBST49.KONTOT_V2('oracle.sql.REF@3344b59',DBST49.KUNDENLISTET_V2(oracle.sql.REF@9ec54f17)),DBST49.KONTOT_V2('oracle.sql.REF@41e246fd',DBST49.KUNDENLISTET_V2(oracle.sql.REF@5814496f))));
REM INSERTING into DBST49.ZWEIGSTELLE_V3
SET DEFINE OFF;
Insert into DBST49.ZWEIGSTELLE_V3 (ZWEIGSTELLE_V3_NAME,ZWEIGSTELLE_V3_LEITER,ZWEIGSTELLE_V3_ADRESSE,ZWEIGSTELLE_V3_KONTEN_LISTE) values ('Bachdorf','1768','DBST49.ADRESSET(''Hochstr.'',''1'',''Bachdorf'',99999)',DBST49.KONTENLISTET_V3(DBST49.KONTOT_V3('S',120768,234.56,DBST49.KUNDENLISTET_V2(oracle.sql.REF@3a44958)),DBST49.KONTOT_V3('G',348973,12567.56,DBST49.KUNDENLISTET_V2(oracle.sql.REF@3a44958,oracle.sql.REF@5814496f)),DBST49.KONTOT_V3('G',678453,-456.78,DBST49.KUNDENLISTET_V2(oracle.sql.REF@5814496f))));
Insert into DBST49.ZWEIGSTELLE_V3 (ZWEIGSTELLE_V3_NAME,ZWEIGSTELLE_V3_LEITER,ZWEIGSTELLE_V3_ADRESSE,ZWEIGSTELLE_V3_KONTEN_LISTE) values ('Riedering','9823','DBST49.ADRESSET(''Simseestr.'',''3'',''Riedering'',88888)',DBST49.KONTENLISTET_V3(DBST49.KONTOT_V3('G',987654,789.65,DBST49.KUNDENLISTET_V2(oracle.sql.REF@9ec54f17)),DBST49.KONTOT_V3('S',745363,-23.67,DBST49.KUNDENLISTET_V2(oracle.sql.REF@5814496f))));
--------------------------------------------------------
--  DDL for Index ADRESSE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."ADRESSE_PK" ON "DBST49"."ADRESSE" ("ADRESSE_STRASSE", "ADRESSE_HAUS_NR", "ADRESSE_ORT", "ADRESSE_PLZ") 
  ;
--------------------------------------------------------
--  DDL for Index KONTO_NR_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."KONTO_NR_PK" ON "DBST49"."KONTO" ("KONTO_NR") 
  ;
--------------------------------------------------------
--  DDL for Index KUNDE_V1_NR_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."KUNDE_V1_NR_PK" ON "DBST49"."KUNDE_V1" ("KUNDE_V1_NR") 
  ;
--------------------------------------------------------
--  DDL for Index PK_COMP_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_COMP_ID" ON "DBST49"."CS_COMPANY" ("COMP_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_CUST_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_CUST_ID" ON "DBST49"."CS_CUSTOMER" ("CUST_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_EMP_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_EMP_ID" ON "DBST49"."CS_EMPLOYEE" ("EMP_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_ITEM_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_ITEM_ID" ON "DBST49"."CS_ITEM" ("ITEM_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_MAKER_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_MAKER_ID" ON "DBST49"."CS_MAKER" ("MAKER_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_MANAG_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_MANAG_ID" ON "DBST49"."CS_MANAGINGEMPLOYEE" ("MANAG_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_SHAREHOLDER_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_SHAREHOLDER_ID" ON "DBST49"."CS_SHAREHOLDER" ("SHAREHOLDER_ID") 
  ;
--------------------------------------------------------
--  DDL for Index PK_TRANS_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."PK_TRANS_ID" ON "DBST49"."CS_TRANSACTION" ("TRANS_ID") 
  ;
--------------------------------------------------------
--  DDL for Index ZWEIG_NAME_V1_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."ZWEIG_NAME_V1_PK" ON "DBST49"."ZWEIGSTELLE_V1" ("ZWEIGSTELLE_V1_NAME") 
  ;
--------------------------------------------------------
--  DDL for Index ZWEIG_NAME_V2_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."ZWEIG_NAME_V2_PK" ON "DBST49"."ZWEIGSTELLE_V2" ("ZWEIGSTELLE_V2_NAME") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158054
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158054" ON "DBST49"."ADRESSE" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162014
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162014" ON "DBST49"."COMP_STORES_NT" ("SYS_NC0001700018$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162015
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162015" ON "DBST49"."COMP_STORES_NT" ("SYS_NC0001500016$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162016
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162016" ON "DBST49"."COMP_STORES_NT" ("SYS_NC0001300014$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162017
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162017" ON "DBST49"."CS_COMPANY" ("SYS_NC0002700028$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162018
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162018" ON "DBST49"."CS_COMPANY" ("SYS_NC0002500026$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162019
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162019" ON "DBST49"."CS_COMPANY" ("SYS_NC0002300024$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162020
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162020" ON "DBST49"."CS_COMPANY" ("SYS_NC0002100022$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162021
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162021" ON "DBST49"."CS_COMPANY" ("SYS_NC0001800019$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162022
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162022" ON "DBST49"."CS_COMPANY" ("SYS_NC0001300014$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162023
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162023" ON "DBST49"."CS_COMPANY" ("SYS_NC0001100012$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162024
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162024" ON "DBST49"."CS_COMPANY" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00161996
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00161996" ON "DBST49"."CS_CUSTOMER" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162027
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162027" ON "DBST49"."CS_EMPLOYEE" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00161993
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00161993" ON "DBST49"."CS_ITEM" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00161994
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00161994" ON "DBST49"."CS_MAKER" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162026
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162026" ON "DBST49"."CS_MANAGINGEMPLOYEE" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00162025
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00162025" ON "DBST49"."CS_SHAREHOLDER" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00161995
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00161995" ON "DBST49"."CS_TRANSACTION" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158049
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158049" ON "DBST49"."KONTO" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00159592
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00159592" ON "DBST49"."KONTO" ("SYS_NC0000700008$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158753
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158753" ON "DBST49"."KONTO_V2" ("SYS_NC0000500006$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158754
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158754" ON "DBST49"."KONTO_V2" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158050
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158050" ON "DBST49"."KUNDE_V1" ("SYS_NC0000800009$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158051
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158051" ON "DBST49"."KUNDE_V1" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158752
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158752" ON "DBST49"."KUNDE_V2" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158052
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158052" ON "DBST49"."ZWEIGSTELLE_V1" ("SYS_NC0000700008$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158053
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158053" ON "DBST49"."ZWEIGSTELLE_V1" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158755
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158755" ON "DBST49"."ZWEIGSTELLE_V2" ("SYS_NC0000700008$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00158756
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00158756" ON "DBST49"."ZWEIGSTELLE_V2" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00159654
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00159654" ON "DBST49"."ZWEIGSTELLE_V3" ("SYS_NC0000700008$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00159655
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00159655" ON "DBST49"."ZWEIGSTELLE_V3" ("SYS_NC_OID$") 
  ;
--------------------------------------------------------
--  DDL for Index SYS_C00159653
--------------------------------------------------------

  CREATE UNIQUE INDEX "DBST49"."SYS_C00159653" ON "DBST49"."ZWEIGSTELLE_V3_KONTEN_LISTE_NT" ("SYS_NC0000700008$") 
  ;
--------------------------------------------------------
--  Constraints for Table ADRESSE
--------------------------------------------------------

  ALTER TABLE "DBST49"."ADRESSE" ADD CONSTRAINT "ADRESSE_PK" PRIMARY KEY ("ADRESSE_STRASSE", "ADRESSE_HAUS_NR", "ADRESSE_ORT", "ADRESSE_PLZ") ENABLE;
 
  ALTER TABLE "DBST49"."ADRESSE" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table COMP_STORES_NT
--------------------------------------------------------

  ALTER TABLE "DBST49"."COMP_STORES_NT" ADD UNIQUE ("STORE_STOCK") ENABLE;
 
  ALTER TABLE "DBST49"."COMP_STORES_NT" ADD UNIQUE ("STORE_DEPARTMENTS") ENABLE;
 
  ALTER TABLE "DBST49"."COMP_STORES_NT" ADD UNIQUE ("STORE_EMPLOYEES") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_COMPANY
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_COMPANY" ADD CONSTRAINT "PK_COMP_ID" PRIMARY KEY ("COMP_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_STORES") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_MANAGERS") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_DIRECTORS") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_SHARES") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE (TREAT("COMP_TYPE" AS "CS_COMPANY_TYPE1_T")."AREA") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_FAX") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("COMP_PHONE") ENABLE;
 
  ALTER TABLE "DBST49"."CS_COMPANY" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_CUSTOMER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_CUSTOMER" ADD CONSTRAINT "PK_CUST_ID" PRIMARY KEY ("CUST_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_CUSTOMER" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_EMPLOYEE
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_EMPLOYEE" ADD CONSTRAINT "PK_EMP_ID" PRIMARY KEY ("EMP_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_EMPLOYEE" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_ITEM
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_ITEM" ADD CONSTRAINT "PK_ITEM_ID" PRIMARY KEY ("ITEM_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_ITEM" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_MAKER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_MAKER" ADD CONSTRAINT "PK_MAKER_ID" PRIMARY KEY ("MAKER_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_MAKER" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_MANAGINGEMPLOYEE
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_MANAGINGEMPLOYEE" ADD CONSTRAINT "PK_MANAG_ID" PRIMARY KEY ("MANAG_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_MANAGINGEMPLOYEE" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_SHAREHOLDER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_SHAREHOLDER" ADD CONSTRAINT "PK_SHAREHOLDER_ID" PRIMARY KEY ("SHAREHOLDER_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_SHAREHOLDER" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table CS_TRANSACTION
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_TRANSACTION" ADD CONSTRAINT "PK_TRANS_ID" PRIMARY KEY ("TRANS_ID") ENABLE;
 
  ALTER TABLE "DBST49"."CS_TRANSACTION" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table KONTO
--------------------------------------------------------

  ALTER TABLE "DBST49"."KONTO" ADD CONSTRAINT "KONTO_NR_PK" PRIMARY KEY ("KONTO_NR") ENABLE;
 
  ALTER TABLE "DBST49"."KONTO" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
 
  ALTER TABLE "DBST49"."KONTO" ADD UNIQUE (TREAT(SYS_NC_ROWINFO$ AS "DBST49"."KONTOT_V3")."KONTO_V2_KUNDEN_LISTE") ENABLE;
--------------------------------------------------------
--  Constraints for Table KONTO_V2
--------------------------------------------------------

  ALTER TABLE "DBST49"."KONTO_V2" ADD UNIQUE ("KONTO_V2_KUNDEN_LISTE") ENABLE;
 
  ALTER TABLE "DBST49"."KONTO_V2" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table KUNDE_V1
--------------------------------------------------------

  ALTER TABLE "DBST49"."KUNDE_V1" ADD CONSTRAINT "KUNDE_V1_NR_PK" PRIMARY KEY ("KUNDE_V1_NR") ENABLE;
 
  ALTER TABLE "DBST49"."KUNDE_V1" ADD UNIQUE ("KUNDE_V1_KONTEN_LISTE") ENABLE;
 
  ALTER TABLE "DBST49"."KUNDE_V1" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table KUNDE_V2
--------------------------------------------------------

  ALTER TABLE "DBST49"."KUNDE_V2" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table ZWEIGSTELLE_V1
--------------------------------------------------------

  ALTER TABLE "DBST49"."ZWEIGSTELLE_V1" ADD UNIQUE ("ZWEIGSTELLE_V1_KONTEN_LISTE") ENABLE;
 
  ALTER TABLE "DBST49"."ZWEIGSTELLE_V1" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
 
  ALTER TABLE "DBST49"."ZWEIGSTELLE_V1" ADD CONSTRAINT "ZWEIG_NAME_V1_PK" PRIMARY KEY ("ZWEIGSTELLE_V1_NAME") ENABLE;
--------------------------------------------------------
--  Constraints for Table ZWEIGSTELLE_V2
--------------------------------------------------------

  ALTER TABLE "DBST49"."ZWEIGSTELLE_V2" ADD UNIQUE ("ZWEIGSTELLE_V2_KONTEN_LISTE") ENABLE;
 
  ALTER TABLE "DBST49"."ZWEIGSTELLE_V2" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
 
  ALTER TABLE "DBST49"."ZWEIGSTELLE_V2" ADD CONSTRAINT "ZWEIG_NAME_V2_PK" PRIMARY KEY ("ZWEIGSTELLE_V2_NAME") ENABLE;
--------------------------------------------------------
--  Constraints for Table ZWEIGSTELLE_V3
--------------------------------------------------------

  ALTER TABLE "DBST49"."ZWEIGSTELLE_V3" ADD UNIQUE ("ZWEIGSTELLE_V3_KONTEN_LISTE") ENABLE;
 
  ALTER TABLE "DBST49"."ZWEIGSTELLE_V3" ADD UNIQUE ("SYS_NC_OID$") ENABLE;
--------------------------------------------------------
--  Constraints for Table ZWEIGSTELLE_V3_KONTEN_LISTE_NT
--------------------------------------------------------

  ALTER TABLE "DBST49"."ZWEIGSTELLE_V3_KONTEN_LISTE_NT" ADD UNIQUE ("KONTO_V3_KUNDEN_LISTE") ENABLE;
