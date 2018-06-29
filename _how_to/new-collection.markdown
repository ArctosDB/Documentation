---
title: Create a collection in Arctos
layout: default_toc
author: DLM
date: 2018-06-08
---
# Prospective Collections in Arctos
 
## For prospective partners


Fill out the Prospective Collection Form at [http://arctos.database.museum/new_collection.cfm](http://arctos.database.museum/new_collection.cfm) and we will contact you.
You will need an Arctos account to access the form; you may create one at the top of any page. Following the guidelines at the [http://handbook.arctosdb.org/documentation/users.html](http://handbook.arctosdb.org/documentation/users.html) will streamline things later.


The submitted form will go to the Arctos Working Group. Someone from the Arctos Working Group (AWG) will contact the submitter as soon as possible to ensure a good communication channel. Please email arctos.treasurer@gmail.com if you have not received a response within one week.  


Once the prospective partner has committed to Arctos, the Arctos Treasurer will being the process of developing a Memorandum of Understanding (MOU) between the institution and Arctos.

## For Arctos
			
The Arctos Working Group will receive an email when a form is submitted. An AWG representative should establish contact with the submitter as soon as possible. A template is available at https://docs.google.com/document/d/1m-lq77WnQpT_6-ClCQfwfqjxP4ETlGAhqh_YXGS0vys/edit. The chair of hte Arcots Working Group will forward the submitted form to the Arctos Steering Committee.

That representative should create an issue in the new-collections repository [https://github.com/ArctosDB/new-collections](https://github.com/ArctosDB/new-collections} at Github at this time. All steps in this document should also be updated in new-collections Githut.



This process relies on mentorship. An institutional Mentor should be assigned as the first part of the administration process. Each collection in the institution will need a Mentor as well; this may all be the same person, or they may all be different, or any combination. Each collection needs at least one Mentor; any arrangement which satisfies this requirement is suitable. 

A list of volunteer Mentors is available at
[http://arctos.database.museum/info/mentor.cfm](http://arctos.database.museum/info/mentor.cfm). Mentors will need global_admin, or someone with global_admin to act on their behalf. To become a Mentor, add a role under Manage Collection.


The Mentor(s) are responsible for the following:


* Facilitate communication between the incoming institution, the Arctos Working Group, and Arctos staff during this entire process, work with the Arctos Treasures to complete an MOU.

* The link in the initial contact email has an administrative section. The institutional mentor should change status to "administrative approval granted" and add their name and email address to the form. Set Status to "approve_to_pre-create_collections," save.


* Define collections. Incoming collections are often merged or split, for example - this should be understood and agreed upon by all involved parties very early in the process. Documentation is available at [http://handbook.arctosdb.org/documentation/catalog.html](http://handbook.arctosdb.org/documentation/catalog.html). Create a GUID_PREFIX for each collection in the institution. This is a permanent value which is used in links to specimens and should never be changed. Please take great care to ensure that the collections understand the importance of stability in this value before proceeding. Documentation is available at [http://handbook.arctosdb.org/documentation/catalog.html](http://handbook.arctosdb.org/documentation/catalog.html). GRBIO may be a useful resource when considering a new GUID Prefix. When GUID_Prefix is established, pre-create collections. 


* Work with the incoming Institution to provide  metadata for each collection.


* Create an Operator for each collection. Documentation is [http://handbook.arctosdb.org/documentation/users.html](http://handbook.arctosdb.org/documentation/users.html) and a How-To is available at [http://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html). These new Operators do not need any roles or collections; this will be assigned when the collections are created.

* Assist with publishing collection data to VertNet Integrated Publishing Toolkit (IPT).


Once collection metadata are provided and reviewed _for all collections in the institution_, the Mentor should change the status to "approve_to_create_collections" and ensure that the database administrators have received the notification of new collections. Collections will not be created until an MOU - see [https://bnhmwp.berkeley.edu/arctos/wp-content/uploads/sites/19/2018/06/Arctos_MOU_template_2018.doc](draft template) - has been signed by all parties. The Arctos Steering Committee Chair will sign the MOU on behalf of Arctos.



## For DBAs

The Arctos DBA Team will get email from new_collections@arctos.database.museum when a Mentor flags an institution as approve_to_create_collections. Sufficient data to create new collections should be in tables pre_new_institution (pkey: niid) and pre_new_collection (fkey: niid). 

All communication should be addressed to pre_new_collection.contact_email and copied to pre_new_collection.mentor_contact.


1. Create collections
2. Grant collection access, manage_collection, and global_admin to pre_new_collection.admin_username (it may be a list).
3. Set pre_new_institution.status to "complete".
