---
title: Geology
layout: default_toc
---

# Geology

Geology is recorded in Arctos through the addition of stratigraphic terms to a [Locality](http://handbook.arctosdb.org/documentation/locality.html) using [Geology Attributes](#geology-attributes). These terms are controlled by the vocabulary contained in the [CTGEOLOGY_ATTRIBUTE code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE). 

## Categories of Stratigraphic Classification

Geologic strata may be classified according to many different properties. Each classification has its own distinctive nomenclature and some also include a hierarchical structure. The following kinds of strata are currently represented in Arctos:

 - <a href="https://en.wikipedia.org/wiki/Biostratigraphy">Biostratigraphy</a> - strata based on the fossil content of the rock bodies. 

 - <a href="https://en.wikipedia.org/wiki/Chronostratigraphy">Chronostratigraphy</a> - strata based on the time of formation of the rock bodies.

 - <a href="https://en.wikipedia.org/wiki/Lithostratigraphy">Lithostratigraphy</a> - stata based on the lithologic properties of the rock bodies.

 - <a href="https://en.wikipedia.org/wiki/Biochronology">Biochronology</a> - strata based on the use of assemblages of fossils that are not tied to stratigraphic sections (in contrast to biostratigraphy, where they are).

## Geology Attributes

Geology Attributes attach geology information to Locality. Each locality may contain any number of geology attributes, each with a determiner and method.

### Structure

UAM@ARCTOS&gt; desc geology_attributes

|Name                                  |`Null`?    |Type|
|--------------------------------------|-----------|----|
|`GEOLOGY_ATTRIBUTE_ID`                  |`NOT NULL`   |`NUMBER`|
|`LOCALITY_ID`                           |`NOT NULL`   |`NUMBER`|
|`GEOLOGY_ATTRIBUTE`                     |`NOT NULL`   |`VARCHAR2(255)`|
|`GEO_ATT_VALUE`                         |`NOT NULL`   |`VARCHAR2(255)`|
|`GEO_ATT_DETERMINER_ID`                 |           |`NUMBER`|
|`GEO_ATT_DETERMINED_DATE`               |           |`DATE`|
|`GEO_ATT_DETERMINED_METHOD`             |           |`VARCHAR2(255)`|
|`GEO_ATT_REMARK`                        |           |`VARCHAR2(4000)`|

 

### Searching

Geology attributes are asserted individually, however, portions of the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE) include a hierarchical structure which makes it possible to locate cataloged items attributed to strata which is more specific than the search term.
