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
--  DDL for Table ADRESSE
--------------------------------------------------------

  CREATE TABLE "DBST49"."ADRESSE" OF "DBST49"."ADRESSET" 
 ;
--------------------------------------------------------
--  DDL for Table CS_COMPANY
--------------------------------------------------------

create table CS_Company of CS_Company_T
nested table Comp_Phone store as Comp_Phone_NT
nested table Comp_Fax store as Comp_Fax_NT
nested table Comp_Shares store as Comp_Shares_NT
nested table Comp_Directors store as Comp_Directors_NT
nested table Comp_Managers store as Comp_Managers_NT
nested table Comp_Stores store as Comp_Stores_NT (  nested table Store_Employees store as Store_Employees_NT
                                                    nested table Store_Departments store as Store_Departments_NT
                                                    nested table Store_Stock store as Store_Stock_NT);

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
--  Constraints for Table ADRESSE
--------------------------------------------------------

  ALTER TABLE "DBST49"."ADRESSE" ADD CONSTRAINT "ADRESSE_PK" PRIMARY KEY ("ADRESSE_STRASSE", "ADRESSE_HAUS_NR", "ADRESSE_ORT", "ADRESSE_PLZ");
--------------------------------------------------------
--  Constraints for Table CS_COMPANY
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_COMPANY" ADD CONSTRAINT "PK_COMP_ID" PRIMARY KEY ("COMP_ID");

--------------------------------------------------------
--  Constraints for Table CS_CUSTOMER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_CUSTOMER" ADD CONSTRAINT "PK_CUST_ID" PRIMARY KEY ("CUST_ID");
--------------------------------------------------------
--  Constraints for Table CS_EMPLOYEE
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_EMPLOYEE" ADD CONSTRAINT "PK_EMP_ID" PRIMARY KEY ("EMP_ID");
--------------------------------------------------------
--  Constraints for Table CS_ITEM
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_ITEM" ADD CONSTRAINT "PK_ITEM_ID" PRIMARY KEY ("ITEM_ID");
--------------------------------------------------------
--  Constraints for Table CS_MAKER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_MAKER" ADD CONSTRAINT "PK_MAKER_ID" PRIMARY KEY ("MAKER_ID");
--------------------------------------------------------
--  Constraints for Table CS_MANAGINGEMPLOYEE
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_MANAGINGEMPLOYEE" ADD CONSTRAINT "PK_MANAG_ID" PRIMARY KEY ("MANAG_ID");

--------------------------------------------------------
--  Constraints for Table CS_SHAREHOLDER
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_SHAREHOLDER" ADD CONSTRAINT "PK_SHAREHOLDER_ID" PRIMARY KEY ("SHAREHOLDER_ID");
--------------------------------------------------------
--  Constraints for Table CS_TRANSACTION
--------------------------------------------------------

  ALTER TABLE "DBST49"."CS_TRANSACTION" ADD CONSTRAINT "PK_TRANS_ID" PRIMARY KEY ("TRANS_ID");