---
title: Catalog
layout: default_toc
---

# Catalog

Catalogs or Collections are administrative lists with inconsistent relationships to
physical items. Therefore, a Cataloged Item is an abstraction, *i.e.*,
it is an item that has been cataloged, and hence defined, by the
administrator of a catalog. 

The term "specimen" is used synonymously with "cataloged item" throughout Arctos.

## Catalog Number

`Cataloged_Item . Cat_Num VARCHAR2(40) not null`

Catalog Number is the identifier assigned to a
Cataloged Item. It must be unique (case-insensitive) within a particular
catalog. Arctos currently supports three formats of catalog number.

1.  **Integer**: Catalog numbers must be positive integers. Arctos
    provides tools to predict the next number (e.g., data entry can
    leave catalog number blank), find gaps in sequences, search by
    ranges, clone full records, and provide GUIDs of the "expected" format. Sort may be numeric (1,2,,3...20). Only this format
    comes with these tools and abilities, and it is often worthwhile to
    convert existing mixed-string catalog "series" to Integer catalog
    numbers and store the old numbers as other IDs.
2.  **Prefix-Integer-Suffix**: An integer is required, and may be
    accompanied by a prefix and/or suffix. The concatenation of
    prefix-integer-suffix must be unique. No predictive tools
    are available. Search is by the concatenation or substrings thereof. Sort will be character (1,2,...20...3).
3.  **String**: Any unique non-NULL string is accepted. No predictive
    tools are available. Search is by the string or
    substrings thereof. Sort will be character (1,2,...20...3). Characters "/" (forward slash) and " " (space) are currently prohibited.
    
    
## Cataloged Item Type

`Cataloged_Item . Cataloged_Item_Type VARCHAR2(20) not null`

A [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCATALOGED_ITEM_TYPE) is available to explicitly label various types of cataloged material.

## Remarks

`Coll_Object_Remark . Coll_Object_Remarks VARCHAR2(4000) null`

Use remarks to document non-standard information pertaining to the specimen. 
Do not use remarks for any information which could be recorded with more structure elsewhere, including
remarks better stored with a part, event, or any other "piece of the specimen."

## Entered By

`Coll_Object . Entered_Person_ID NUMBER(22) not null`

Agent creating the catalog record in Arctos.

## Entered Date

`Coll_Object . Coll_Object_Entered_Date NUMBER(7) not null`

Date on which the record was created.

## Edited By

`Coll_Object . Last_Edited_Person_ID NUMBER(22) null`

Agent last editing the catalog record.

## Edited Date

`Coll_Object . Last_Edit_Date NUMBER(7) null`

Date on which the record was last edited.

## Flags

`Coll_Object . Flags VARCHAR2(20) null`

Flags mark a specimen as missing information during the entry process. It is sometimes more convenient to bulkload data after the
specimen record exists than to enter data with the specimen; flags serves as a marker to facilitate easily locating those specimens.

## Associated Species

`Coll_Object_Remark . Associated_Species VARCHAR2(4000) null`

Free-text description of species associated with the specimen.

## Guid Prefix

`Collection . GUID_Prefix VARCHAR2(20) not null`

Catalogs are most usefully defined by way of a GUID Prefix,
which in conjunction with catalog number forms a unique identifier
within Arctos, and in conjunction with Arctos’ URI forms a Globally
Unique Identifier (GUID) for the specimen record. GUIDs, once formed,
must never be allowed to change or expire. See [deleting specimens](#deleting-records-from-arctos) 
for guidelines. All specimen citations should occur by way of GUID. Note that while GUID Prefix 
generally appears to be a concatenation of institution and collection code, it is in fact an independent
concept; several collections from an institution may use the 'Herb' collection_cde 
(*e.g.* for vascular plants, cryptogams, and marine algae collections, for example).

### Choosing a new GUID_PREFIX

We require GUID_PREFIX to be 20 or fewer characters, and contain exactly one colon `:` not at the beginning or end of the string.

We recommend choosing a GUID_PREFIX that will survive being transferred through various mechanisms, displayed in web pages that might use "fancy" formatting, or typed by users with many kinds of input devices in many languages. We recommend only upper and lower-case ASCII letters (A-Z,a-z), other than the required colon.

## Collection

`Collection . Collection VARCHAR2(50) not null`

A short name for a particular collection type. For
example:

-   Mammal Specimens

## Collection Code

`Collection . Collection_Cde VARCHAR2(5) not null`

Collection Code links catalogs to collection-type-specific code tables. Values are generally descriptive ("Mamm" or "Bird"), but
no deeper meaning exists.
Existing collection_cde values are in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde).
Exploring the "filter" option of [Attribute Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_TYPE)
will provide an idea of how a collection type has been used.

## Description

`Collection . Descr VARCHAR2(4000) null`

An extended name/description of the collection. For example:

-   University of Alaska Museum, Mammal Collection
-   Parasite Collection at the Museum of Southwestern Biology,
    Albuquerque, NM
-   Kenelm W. Philip lepidoptera collection

## Institution Acronym

`Collection . Institution_Acronym VARCHAR2(20) null`

Abbreviation of the institution that hosts the
catalog. For example, "MVZ" for Museum of Vertebrate Zoology, "UAM" for
University of Alaska Museum (of the North), "MSB" for Museum of
Southwestern Biology. Generally, these values are the same as those
traditionally used for specimen citations within discipline-specific
publications. There is now a demand for globally unique specimen
identifiers on the Internet, and at least [one registry](http://grbio.org) for such abbreviations has been
established.

## Searching

From SpecimenSearch, Catalog Number accepts arguments of several forms.
The following table is illustrative.

  |Input     | Matches                                         | Why           |
  |----------|-------------------------------------------------|---------------|
  |12        | ```12```                                              | No-operator inputs are string matched.|
  |12-14     | ```12```, ```13```, or ```14```                                   | Dash-separated smaller–&gt;larger integers specify a range. Note that there is a 1000-item limit on ranges and lists.|
  |=12-14    | ```12-14```                                           | "=" (equals) prefix overrides all other operators and assumptions; only a matching string is returned.|
  |12-11     | ```12-11```                                           |  "Second" item is smaller than "first" item; not considered as range.|
  |12-0110   | ```12-0110```                                          | "Second" item is zero-padded so not considered an integer; not considered as range.|
  |12,13,14  | ```12```, ```13```, or ```14```         |  Commas are treated as list delimiters unless the value is prefixed with an equals sign. Note that there is a 1000-item limit on ranges and lists.|
  |12,13a,14 | ```12```, ```13a```, or ```14```                                 | Commas are treated as list delimiters unless the value is prefixed with an equals sign. Neither catalog numbers nor list elements must be numeric. Note that there is a 1000-item limit on ranges and lists.|
  |%12%      |```12```, ```12```1, ```12```a, 9994836```12```345, ….      | "%" is "match anything." This matches anything CONTAINING 12.|
  |%12       |  ```12```, 1```12```, AABC-5-a```12```, ….                        |  "%" is "match anything." This matches anything ENDING WITH 12.|
  |\_12      |  0```12```, a```12```, 9```12```, ….                              |  "\_" is "match any single character."|
  |1_2       | ```1```0```2```, 1```12```, ```1```A```2```, ….                               | "\_" is "match any single character."|

## Locating Specimens by Identifier

Each specimen in Arctos receives (and is define by) a single catalog number, along with any
number of identifying numbers, often referred to as "Other IDs." There
are several ways, each with their own limitations, to search these
numbers. The data available for searching vary wildly based on what
collectors have recorded and what collections have entered. Some
exploration is often involved in finding a particular set of specimens.

### Other IDs

Along with catalog numbers, Arctos provides the capacity to attach any
number of [identifiers of various
types](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type&field=)
to specimens.

Other Identifiers, like catalog numbers, have three components: A
prefix, an integer, and a suffix. Individual collections define how
these components should be used, acceptable values, and how data are to
be entered, and these decisions affect what sorts of queries are
possible. It is often not possible to deduce these rules and practices –
[contact us](http://arctos.database.museum/contact.cfm) if you need
help.

To get Other ID search, click More Options on the Identifiers pane of
SpecimenSearch.

<img src="../images/classic-uploads/2013/06/9ad69-idp.png" width="640"
height="56" />

This will provide options to select Other ID Type and to provide an
Other ID Number. (We generally use "number" in the sense of a license
plate rather than an integer.) Additionally, you can choose whether the
number is an exact match or a "contains" match. Exact match searches are
case-sensitive.

It’s often unclear what type of ID might have been assigned to a number,
and the descriptions currently do little to clarify that problem. It is
therefore possible (and often most practical) to search by the number
component, entirely ignoring ID Type.

<img src="../images/classic-uploads/2013/06/c8310-screenshot2011-07-12at1-34-13pm.png" width="640" height="140" />

The above example finds all specimens with any type of identifier
(except catalog number)

containing the string `123`. As of this writing, that search returns
9330 specimens. Additional criteria, coupled with Arctos’ sorting
capability, is hopefully enough to find the specimen data of interest.

To get all search options, click Customize (near "Show More Options"),
select a "My Other Identifier" (which will also then appear in results
and on various forms), and choose "Show 3-part ID Search."

<img src="../images/classic-uploads/2013/06/d5574-screenshot2011-07-12at10-54-33am.png" width="640" height="124" />

Click Close and the form will reload with total of eight search options.
For this example, we’ll use [Collector
Number](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type&field=collector%20number).
The simplest use case is to search for a string, here `1234`:

<img src="../images/classic-uploads/2013/06/d77d2-screenshot2011-07-12at11-01-46am.png" width="640" height="78" />

This sends the query `upper(customIdentifier.Display_Value) LIKE
‘%1234%’` (`display_value` is a concatenation of prefix, number, and
suffix). This returns specimens with Collector Numbers of:

-   ABC-1234-X
-   1234
-   1234567

regardless of how the data were entered and are stored. ("ABC-1234-X"
could be entered as prefix="ABC-1234-X" or as prefix="ABC-",
number="1234″, suffix="-X"; "1234" could have been entered as a number
or as a prefix.)

Changing the dropdown from "contains" to "is" will, of the above
examples, return only "1234."

The "in list" option accepts a comma-separated list of values.

<img src="../images/classic-uploads/2013/06/32a29-screenshot2011-07-12at11-13-08am.png" width="640"
height="76" />

The above example sends SQL `upper(customIdentifier.DISPLAY_VALUE) IN
(‘A’,’B’,’C’)`, and as of this writing returns three specimens:

<img src="../images/classic-uploads/2013/06/15eba-screenshot2011-07-12at11-15-18am.png" width="400"
height="146" />

The in range option works only for enforced-integer types of identifiers
(currently only AF and NK). Attempting to use it for collector number
will result in a datatype mismatch and return an error.

Three-part search to the rescue! (At
least in the cases where data are entered correctly.) All of the above
deal with the concatenation of prefix, number, and suffix. It is also
possible to search these independently. Search for integer
`component=1234`:

<img src="../images/classic-uploads/2013/06/a7771-screenshot2011-07-12at11-26-42am.png" width="640"
height="116" />

to send SQL `customIdentifier.other_id_number = 1234.`

This is a numeric match of the numeric part of other IDs. It will not
find specimens which have the numeric information entered into prefix.
This information is not available to public users, but is evident from
the edit form. This specimen will NOT be found with the previous search!

<img src="../images/classic-uploads/2013/06/b9b6a-screenshot2011-07-12at11-35-21am.png" width="640"
height="56" />

Prefix and suffix work similarly. This search:

<img src="../images/classic-uploads/2013/06/7719a-screenshot2011-07-12at11-37-17am.png" width="640"
height="90" />

sends SQL `AND upper(customIdentifier.other_id_prefix) LIKE ‘%A%’ AND
customIdentifier.other_id_number = 123` (note prefix is a `CONTAINS`
match and is not case-sensitive) and returns these specimens:

![](../images/classic-uploads/2013/06/7aa78-screenshot2011-07-12at11-39-28am.png){width="320"
height="215"}

## Understanding Cataloged Items

We address assigning catalog numbers to material with a few brief
examples.

In short, we strongly recommend cataloging the item of scientific
interest: the material that Researcher \#2 will ask to borrow for
confirmation when they find your citations in GenBank or publications.
Any other approach complicates tracking citations and data management.

We present as example a brief list of things that may be cataloged in
Arctos.

-   A **biological individual**
    -   Standard practice in vertebrate collections, and the method we
        strongly encourage when possible. Biological individuals are
        generally the item of scientific interest, and the thing a
        future researcher will wish to examine if attempting to
        replicate results.
-   A **biological individual and their parasites**
    -   Common practice in vertebrate collections, but makes locating or
        citing a parasite more complicated and less reliable than it
        needs to be. Rather, we recommend cataloging the host,
        cataloging the individual parasites (or donating them to someone
        who can), and establishing proper relationships.
-   A **lot** (*e.g.*, all intestinal parasites from an individual; all
    members of a taxon from a time and place, or all insects from
    a trap)
    -   While lots are a convenient and sometimes necessary "working
        group," (*e.g.*, due to the number of individuals involved or
        the available expertise in identification) we strongly
        discourage making lots available for citation. Insect
        collections often loan lots, and the borrowing researcher will
        sort the lot to individuals for which they are provided catalog
        numbers, a situation we find acceptable. Attaching cryptic and
        fragile "individual tags" to members of a lot when someone uses
        a specimen for molecular analysis makes little sense to us.
-   An **occurrence** (*e.g.*, each instance of the capture of
    an individual)
    -   This situation inevitably leads to confusing citations and bad
        science when an individual sampled multiple times at multiple
        locations is assumed by users to be multiple
        distinct individuals. Arctos supports cataloging encounters as
        [specimen events](/specimen-event.html) under one cataloged item.
-   **Your "share"** of an individual (*e.g.*, tissues; the bones being
    cataloged elsewhere)
    -   Similar to occurrences in that this leads to multiple
        identifiers being assigned to an individual (and potentially the
        two being compared in a study), this should be avoided
        when possible. When unavoidable, both systems should support
        resolvable identifiers and link to each other, and specimen
        downloads should include the relationship. Arctos also adds a
        distinctive style to "same individual as" specimens.
-   **Various parts** of an individual (*e.g.*, tissues cataloged separately
    from vouchers)
    -   This denormalization of data inevitable leads to divergence and
        confusion (not to mention increased curatorial workload), in
        addition to the aforementioned implications of assigning the
        item of scientific interest multiple primary identifiers. Having
        reconciled the data in similar systems, we cannot possibly be
        vigorous enough in discouraging the continuation of
        such methodology.
-   An **entire collection**
    -   We include this to stress the fact that cataloged items are
        wholly arbitrary concepts assigned to whatever someone wanted
        to catalog. That is, the scientific value of a cataloged number
        is entirely up to the person deciding upon the material
        to catalog.
-   **Several of the above**
    -   An individual or physical item (or anything else) may have any
        number of catalog numbers within or across collections. While
        this is occasionally necessary for various political or
        administrative reasons, we strongly encourage avoidance, and the
        proper use of resolvable OtherIDs (in a system which
        supports them) to clearly link all of the components of the item
        of scientific interest together when multiple numbers are for
        some reason necessary. (see <http://mailman.yale.edu/pipermail/nhcoll-l/2016-March/009178.html>)



# Defining Collections

Collections in Arctos are wholly administrative. Collections may be comprised of similar taxa (*e.g.* mammals), of
various taxa organized for some purpose (such at the [Hildebrandt Collection at MVZ](http://mvz.berkeley.edu/Other_Collections.html)),
by legacy usage, or anything else. The sole functional or technical consideration is code tables, which are tied to collection type
 (collection_cde). For example, contrast Attributes available to a 
[Mamm collection](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_TYPE&coln=Mamm)
versus a [Para collection](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_TYPE&coln=Para).

Legacy collections often exist for various reasons, and these may have duplicate catalog numbers, unpredictable formats which may
confuse users, or contain arbitrary divides which no longer make sense. Combining these into a unified collection in Arctos is generally
trivial, and Arctos provides various mechanisms (such as [actionable identifiers](other-identifying-numbers.html) and 
[redirects](/redirect.html)) to ensure that no functionality is lost. Collections with "less citable" catalog number schemes are
unlikely to support actionable citations, and so little is lost if the
"traditional catalog numbers" are subsumed under a "citable catalog
number." This approach has been used to unify and disambiguate several
Arctos collections; we find tradition little excuse to go forward under
systems which discourage good science.

# Deleting records from Arctos

1.  [Encumber](/documentation/encumbrance)
    the record(s) to be deleted. Create an appropriate encumbrance
    first, if necessary. Records may be flagged from individual
    specimens, or *en masse* by using the Manage widget
    from Specimen Results of a search. Once records are flagged, they may be deleted
    by users with the appropriate privileges.
2.  Find the encumbrance (under Tools). Click See Specimens and
    *carefully* review what you’re about to delete.
3.  From Manage Encumbrances, click Delete Encumbered Specimens. You’ll
    again be asked to review your decision, and must click the proceed
    button at the bottom of the page to delete the records from
    the database.

Note that there may be reasons to keep masked records in the database
instead of deleting them.

# Recataloging Specimens

It is sometimes necessary to move cataloged items from one collection or
catalog number to another. When doing so, it is important to maintain a
way of finding the specimen by its original identifiers. In this, be as
specific as possible. Use specific identifier types and GUIDs if
possible. (See more at [Other IDs](/documentation/other-identifying-numbers).)

Arctos provides HTTP redirect capability, under which one URL
(<http://arctos.database.museum/guid/KNWR:Ento:7193>, for example) can
be automatically redirected to another
(<http://arctos.database.museum/guid/UAM:Ento:228334>). This helps in
maintaining a record of the specimen rather than the specimen’s
identifying numbers, and allows users to continue using bookmarks and
links.

To do this,

1.  Ensure that the "old" URL returns a 404 HTTP status code. You may do
    this in two ways:
    1.  Delete the specimen. All users will then get the redirect.
    2.  Encumber the specimen with a "mask record" encumbrance. Users
        who do not have rights to bypass the encumbrance (*e.g.*, all
        public users) will then be redirected, while operators will be
        able to continue to access the record.

2.  Insert into table REDIRECT (Manage Data/Tools/Redirects) old and
    new paths. For example, if DGR:Mamm:123 is recataloged as
    MSB:Mamm:456, enter: old_path=**/guid/DGR:Mamm:123**;
    new_path=**/guid/MSB:Mamm:456**.

Other ID documentation has moved to [it’s own page](/documentation/other-identifying-numbers).
