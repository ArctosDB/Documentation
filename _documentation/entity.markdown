---
title: Entities
author: ArctosDB
date: 2021-05-12
layout: default_toc
---

# Entities

Entities are primarily assemblages of catalog records intended to represent DWC:Organisms, but could easily be extended to other types of records and other types of assemblies.

## Usage

Entities serve initially and primarily to provide a resolvable identifier for use as Organism ID.


## Model

### Entity

Entity is the "core" table. Entities consist of a unique identifier (in the form of a URL) and a type. Entity type is controlled by [ctentity_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctentity_type)

### Entity Assertion


Entity assertions are metadata which clarify the Entity. An Entity can have any number of Assertions. Datatype is loosely enforced; Assertions are primarily intended as a discovery mechanism. 

Fields include:

* assertion_type: controlled by [ctentity_assertion_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctentity_assertion_type)
* assertion_value: text
* assertion_url: link to the assertion (in some form)
* assertion_remark: supporting comments

## Examples

The simplest use case involves simply creating an Entity. Creation is available to authorized users after search results; users are expected to ensure that they are not creating functional duplicates. (True duplicates are prevented.)

<img width="595" alt="Screen Shot 2021-05-12 at 8 46 58 AM" src="https://user-images.githubusercontent.com/5720791/118004829-aaaf8900-b2fe-11eb-861e-922c5dd144e7.png">


This results in an Entity ID suitable for use as an Organism ID.

<img width="521" alt="Screen Shot 2021-05-12 at 8 48 18 AM" src="https://user-images.githubusercontent.com/5720791/118005030-ddf21800-b2fe-11eb-9565-d332f7b17d3c.png">

It is not possible to modify an Entity after creation, but a preferred alternative can be asserted. 

<img width="856" alt="Screen Shot 2021-05-12 at 8 49 52 AM" src="https://user-images.githubusercontent.com/5720791/118005222-0bd75c80-b2ff-11eb-985b-ebe9c2fd2dfa.png">

Any number of assertions may be added. The edit form contains a method of pulling metadata for ``component`` assertions.

<img width="680" alt="Screen Shot 2021-05-12 at 8 52 03 AM" src="https://user-images.githubusercontent.com/5720791/118005621-6375c800-b2ff-11eb-9ed2-7e85761dd298.png">

<img width="861" alt="Screen Shot 2021-05-12 at 8 52 16 AM" src="https://user-images.githubusercontent.com/5720791/118005638-683a7c00-b2ff-11eb-857a-3b10eda3cd05.png">


Checks against "local" data are provided, including records wearing the Entity ID as Organism ID but not listed in the Organism:

<img width="340" alt="Screen Shot 2021-05-12 at 8 53 12 AM" src="https://user-images.githubusercontent.com/5720791/118005828-93bd6680-b2ff-11eb-952c-351969e80efe.png">

And records listed which do not wear the identifier:

<img width="1358" alt="Screen Shot 2021-05-12 at 8 54 29 AM" src="https://user-images.githubusercontent.com/5720791/118005972-b780ac80-b2ff-11eb-93c6-0c15ab788fa5.png">


Catalog records bearing an Entity ID as Organism ID will link to the Entity, and provide a link to locate all other records which share the ID.

<img width="412" alt="Screen Shot 2021-05-12 at 8 56 11 AM" src="https://user-images.githubusercontent.com/5720791/118006218-edbe2c00-b2ff-11eb-8078-d5f0bbebb308.png">


### The Process

1. Find some "components." We'll use http://test.arctos.database.museum/guid/MSB:Mamm:269648 and http://test.arctos.database.museum/guid/DMNS:Mamm:13708.

2. Search for an Entity; make sure this doesn't exist. Click Create.

<img width="255" alt="Screen Shot 2021-05-19 at 4 34 17 PM" src="https://user-images.githubusercontent.com/5720791/118897889-16c25c00-b8c0-11eb-99ec-f86178c5cf39.png">

3. Provide a name, pick a type, click. 

<img width="803" alt="Screen Shot 2021-05-19 at 4 35 03 PM" src="https://user-images.githubusercontent.com/5720791/118897923-322d6700-b8c0-11eb-8cae-04e828b71382.png">

4. You'll get dumped on the edit screen. Enter the "components" as components, save. Value needs sorted out and documented; URL is the critical part of this.

<img width="994" alt="Screen Shot 2021-05-19 at 4 36 05 PM" src="https://user-images.githubusercontent.com/5720791/118897985-630d9c00-b8c0-11eb-8035-f2cd83144b6d.png">

Save

<img width="219" alt="Screen Shot 2021-05-19 at 4 37 35 PM" src="https://user-images.githubusercontent.com/5720791/118898068-93553a80-b8c0-11eb-970c-1244b2176591.png">

Scroll down, click pull

<img width="226" alt="Screen Shot 2021-05-19 at 4 38 09 PM" src="https://user-images.githubusercontent.com/5720791/118898107-a23bed00-b8c0-11eb-992c-47c2ed644c80.png">

accept

<img width="461" alt="Screen Shot 2021-05-19 at 4 38 32 PM" src="https://user-images.githubusercontent.com/5720791/118898122-ae27af00-b8c0-11eb-9a29-1bc1730c7f5a.png">


You now have a workable "entity" and can be done. Optionally, provide more data.

<img width="1332" alt="Screen Shot 2021-05-19 at 4 40 30 PM" src="https://user-images.githubusercontent.com/5720791/118898235-f515a480-b8c0-11eb-879d-63a4434a6a4d.png">

Don't forget to save, then return to the "detail page"

<img width="440" alt="Screen Shot 2021-05-19 at 4 41 17 PM" src="https://user-images.githubusercontent.com/5720791/118898287-0f4f8280-b8c1-11eb-8310-a98765fe9cc1.png">

Click "copy" to get the ID into your clipboard.

<img width="585" alt="Screen Shot 2021-05-19 at 4 41 57 PM" src="https://user-images.githubusercontent.com/5720791/118898332-268e7000-b8c1-11eb-98e7-609be8063809.png">

Click the two "component" links to open the catalog records, add Organism ID

<img width="640" alt="Screen Shot 2021-05-19 at 4 42 56 PM" src="https://user-images.githubusercontent.com/5720791/118898410-550c4b00-b8c1-11eb-8df8-d29792962355.png">

<img width="713" alt="Screen Shot 2021-05-19 at 4 43 14 PM" src="https://user-images.githubusercontent.com/5720791/118898415-5a699580-b8c1-11eb-9278-5b0023385589.png">

The process is now complete, and the edit entity form will provide comforting messages.

<img width="1365" alt="Screen Shot 2021-05-19 at 4 44 11 PM" src="https://user-images.githubusercontent.com/5720791/118898479-7a995480-b8c1-11eb-9ec1-587b5fcdb292.png">


## Choosing Organism ID

[ Consider moving this to Other ID documentation ]

Any string may be used as Organism ID. Some possibilities and their implications include:

### Arctos Entity ID

Arctos Entities are currently our recommended Organism ID.

* Is a GUID (Globally Unique IDentifier)
* Is resolvable
* Bears metadata
* Easily tested for existence and suitability
* Is controlled by the Arctos Community
* Currently used only by the Arctos Community

### Other Resolvable Identifiers

Other Resolvable Identifiers are more or less "anything with a URL." These include WikiData, and potentially things like zoo records (should such come online). These are "good" identifiers by virtue of being globally unique and resolvable, but may vary wildly on attributes such as:

* persistence
* control (including vandalism prevention)
* ability to carry metadata or form links to relevant data
* ability to be tested for existence or suitability

### Non-resolvable Identifiers

Non-resolvable Identifiers are strings, generally issued by some (perhaps unknown) Agent. These are generally "less good" identifiers in that they:

* are often represented in many forms (ABC123,ABC-123, ABC 123, ...)
* can contain no mechanism to test for suitability
* can bear no metadata
* may or may not be unique

Examples include:

* USGS Bird Banding Laboratory numbers
* GAN numbers (zoo identifiers)
* Mexican Wolf Studbook numbers
* Collector numbers
