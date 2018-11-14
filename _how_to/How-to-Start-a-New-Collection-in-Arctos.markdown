---
title: How To Start as a New Collection in Arctos
layout: default_toc
author: Carla Cicero
date: 2016-06-30
---
# How to Start as a New Collection in Arctos

If you are joining Arctos, welcome! 

Now that you've decided to join Arctos, there are a few steps before you can actually do anything in Arctos. First, ensure that your institution and collection(s) are registered in the Global Registry of Biological Repositories (GRBIO), and then you can create new institution/collection(s) in Arctos.

**_All of this assumes that you have already completed the [Prospective Collection Form](http://arctos.database.museum/new_collection.cfm), been in contact with Arctos about joining, and have a signed Memorandum of Understanding between your institution and Arctos._**

## Registering your Institution/ Collection(s) at GRBIO

GRBio ([http://grbio.org](http://grbio.org)) is an online registry of biological collections in natural history museums, herbaria, and other biorepositories. In addition to providing descriptions about collections, this registry is a central source for standardized collection metadata including contacts, addresses, and Darwin Core identifiers for institutions (institutionCode) and collections (collectionCode). To register your collections, follow these steps:

### Register Your Institution
* Go to [http://grbio.org/node/add/register-biorepository](http://grbio.org/node/add/register-biorepository)
* Enter the institutional information in the fields provided (just a few fields are required, but enter as much information as possible including the institutional URL(s) and a description about the institution).
* You are required to enter an InstitutionCode here, which must be globally unique and should be a short alphabetic code (preferably four characters or less, numbers and special characters are not allowed); InstitutionCode will be used for Arctos, VertNet, iDigBio, GBIF, and other Darwin Core-based biodiversity portals.
* You must enter a primary contact for the institution; if the contact doesn't yet exist in the GRBIO registery, you will need to register him/her (see next section).
* Hit the "Save" button.

### Register Staff Members 
* Go to [http://grbio.org/node/add/register-staff-member](http://grbio.org/node/add/register-staff-member)
* Enter the person's information in the fields provided (just a few fields are required, but enter as much information as possible)
* Hit the "Save" button

### Register Your Institutional Collection(s)
* Go to [http://grbio.org/node/add/register-institution-collection](http://grbio.org/node/add/register-institution-collection)
* Enter as much information as possible about the collection that you are registering, including URLs and a description about the specific collection.
* You are required to enter a CollectionCode here, which must be unique within the institution. Collection codes should follow those for other similar types of collections in Arctos (e.g., 'Bird' for bird collections). View a list of [existing collection codes in Arctos](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde).
* Each unique collection within an institution must be registered separately; once you register the first collection, hit "Save" and then repeat with each collection.

## Adding Your Institution and Collection(s) to Arctos

Once you have registered with GRBIO and are ready to migrate your data to Arctos, we will help with the process. The first step is to create the new collection in the database, which involves filling out a [web form](http://www.jotform.us/form/43147289690161) that we will use to add the following information about the collection into Arctos. The same information will be used to create metadata for publishing the collection’s data to [VertNet](http://vertnet.org), [Global Biodiversity Information Facility (GBIF)](http://www.gbif.org), [Integrated Digitized Biocollections (iDigBio)](https://www.idigbio.org), and other external portals.

The metadata you enter here should match your entries in GRBIO. **Required fields are in bold**:

* **Institution Name**: The name of the institution along with its acronym. Copy the format in the "Collection" dropdown list on the [Arctos Specimen Search](http://arctos.database.museum) page.

`Example: University of Alaska Museum (UAM)`

* **Institution Acronym**: This standardized acronym conforms with the entry in GRBIO.

`Example: UAM`

* **Collection Code**: Pick one for each collection from the [Arctos Collection Code Table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLLECTION_CDE). Codes must be standardized - e.g., all  collections of the same type should have the same collection code - and conform with the entry in GRBIO.

`Example: Mamm`

* **Collection Name**: This is a standardized short description of the collection type – Standardized across Arctos Institutions. For new collection types, copy the format of the “outgroup” values in the “pick collection” list on SpecimenSearch.

`Example: Mammal Specimens`

* **Collection Description**: A description for the collection that provides information on the size and scope of the collection, as well as any special holdings. Keep it under 4,000 characters.

* **Contact Name for Collection Data**: The primary person responsible for managing the data for this  collection. If there is more than one contact, you will need to add any additional people under the [Manage Collection](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Manage-a-Collection-in-Arctos) function once the collection is created in Arctos.

* **Contact Email for Collection Data**: A valid email address for the primary contact for collection data.

* **Contact Name for Collection Loans**: The primary person responsible for managing loans for this collection. If there is more than one contact, you will need to add any additional people under the [Manage Collection](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Manage-a-Collection-in-Arctos) function once the collection is created in Arctos.

* **Contact Email for Collection Data**: A valid email address for the primary contact for collection loans.

* **Web Link**: A http(s) link to the main collection web page.

* **Web Link Text**: Text you want displayed for the link, e.g. "Museum of Natural History Website"

After your collections are added to Arctos, you will need to add metadata about each collection in Arctos. Follow the instructions on [How to Manage a Collection in Arctos](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Manage-a-Collection-in-Arctos).

## Joining the Actos community listserv

Arctos uses Google Groups to manage its email lists. Anyone who is a collection contact (data, loan, etc.) or a regular Arctos user 
should join the main Arctos Google Group. To do so, go to https://groups.google.com/forum/#!forum/arctos. You should see a blue button
 in the top bar that says "Apply to join group." Click on this button, and in the dialog box that appears make sure to edit your
  display name so that it's your actual name, and check that you would like to receive email updates, as shown in the screenshot below.

![](https://github.com/ArctosDB/documentation-wiki/raw/gh-pages/images/uploads/googlegroups-signup.png)

If you go to the Google Groups site above and do not see the "Apply to join group" button it means one of two things:

1. You are already a member of the group but may not be receiving emails. To fix this, go to the upper right corner of the browser window where you will see "My Settings," and under that is "Membership and email settings." Edit your email preferences (and display name if it's not your real name).
2. You are not logged into your browser with a Google account. For better or worse Google Groups requires a Google account to use. If you already have a Google account you can sign in by clicking the blue "Sign in" button in the upper right corner of the browser. If you do not have a Google account you can make one with any email, even an institutional email, and benefit from functions like Google Drive and Google Groups without using Gmail.

If you have any trouble signing up for the Arctos community listserv, please contact the Arctos Working Group by emailing arctos-working-group@googlegroups.com for help, as it is important for you to be part of this communication channel.

## Joining the Actos GitHub platform

Arctos uses GitHub Issues to communicate development. Everyone with an interest in Arctos data should minimally monitor Issues in the Arctos 
repository. Instructions are [https://doi.org/10.7299/X75B02M5](https://doi.org/10.7299/X75B02M5).

