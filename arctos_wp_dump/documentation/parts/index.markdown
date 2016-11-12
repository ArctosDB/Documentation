Part names should refer to specific anatomical parts or recognized
groups of parts (*e.g.*, “postcranial skeleton”).  With rare exception,
parts are the singular form of a noun.  In some cases, where the parts
may be a batch of indefinite size, the plural is included
parenthetically (*e.g.,* “endoparasite(s)”).

Parts, when separable, should be entered on individual lines of the
parts grid as individual\
collection objects. Distinct parts should be entered on separate lines,
*e.g*., ***skull*** and ***postcranial skeleton***.  A ***postcranial
skeleton*** is considered a single part. Parts\
already contained in the ***postcranial skeleton*** may be entered on
separate lines for clarity.  An acceptable entry might be:

> skull\
> postcranial skeleton (partial)\
> right humerus \[part condition: broken\]

Such an entry would designate a postcranial skeleton that has a broken\
right humerus. Situations like this are typically discovered during\
loans, are almost always unique, and should be dealt with on a case by\
case basis.

Part name contains information once split out into part modifier, and
also preservation and storage information. Preservation and storage
information (eg, “reproductive tract (formalin-fixed, 70% ethanol)”) is
not meant to replace container condition information (e.g.,
“checked-by-on-date” and fluid\_preservation\_history), but simply to
facilitate searching.

“Traditional” (a concept which varies wildly by discipline and
collection) part names are often stored without “modifiers.” A
“skeleton” in a mammal collection probably consists of cleaned, dried
bones stored at room temperature, for example.

The specimen part code table also contains a “is\_tissue” flag. Parts
flagged as “tissues” indicate a Specimen Part is a sample intended for
subsampling and distribution, generally for purposes of destructive
analysis, or simply a part with readily-available tissue from which DNA
may be extracted. In general, these parts are soft organs, or parts
thereof, preserved by freezing. Such samples commonly supply DNA for
sequence analysis, and many researchers want to search for specimens
from which they can readily obtain subsamples.

<div class="fldDef">

Coll\_Object.Disposition\
VARCHAR(20) not null\
[ctcoll\_obj\_disp](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_obj_disp)

</div>

[](#top){.infoLink}\
**Disposition** describes the status of parts and, as an abstract
generality,\
the status of cataloged items.  Typical values are:

-   in collection
-   being processed
-   on loan
-   missing
-   destroyed

<div class="fldDef">

Coll\_Object.Condition\
VARCHAR(255) not null

</div>

[](#top){.infoLink}

**Condition** is used for entries such as “broken” or “dissected”.

-   5 – The best tissues. These have gone from a freshly killed animal
    directly into liquid nitrogen. The animal should not have been dead
    for more than thirty minutes.
-   4 – These are tissues taken from animals only a few hours post
    mortem at cool temperatures. Such tissues should not have been
    previously frozen and thawed.
-   3 – These are tissues taken from an animal that has been dead less
    than sixteen hours at cool temperatures, or tissues taken from an
    animal that was hard frozen soon after death and then thawed
    for preparation. Fur is not slipping.
-   2 – These tissues may be beginning to show signs of decomposition.
-   1 – These tissues are flaccid and thoroughly autolyzed. They
    probably stink.

<div class="fldDef">

Coll\_Object.Lot\_Count\
NUMBER not null

</div>

[](#top){.infoLink}

A **Lot Count** is an integer that enumberates how many similar items
comprise a part.  The value is frequently one (1), but collections of
fish and invertebrates usually assign a single catalog number to all of
the individual organisms of one species from one collecting event. 
Thus, 86 minnows of one species from one place, collected at the same
time, and stored together in one jar of alcohol would be a cataloged
item with one part,and that part would have a lot count of 86 whole
animals.

+--------------------+--------------------+--------------------+--------------------+
| <div               | <div               | <div               | <div               |
| align="center">    | align="center">    | align="center">    | align="center">    |
|                    |                    |                    |                    |
| Catalog \#         | Part Name          | Pres Method        | Lot Cnt            |
|                    |                    |                    |                    |
| </div>             | </div>             | </div>             | </div>             |
+--------------------+--------------------+--------------------+--------------------+
| <div               | <div               | <div               | <div               |
| align="center">    | align="center">    | align="center">    | align="center">    |
|                    |                    |                    |                    |
| 123456             | whole animal       | alcohol            | 85                 |
|                    |                    |                    |                    |
| </div>             | </div>             | </div>             | </div>             |
+--------------------+--------------------+--------------------+--------------------+
| <div               | <div               | <div               | <div               |
| align="center">    | align="center">    | align="center">    | align="center">    |
|                    |                    |                    |                    |
| 123456             | skeleton           | cleared and        | 1                  |
|                    |                    | stained            |                    |
| </div>             | </div>             |                    | </div>             |
|                    |                    | </div>             |                    |
+--------------------+--------------------+--------------------+--------------------+

Lot counts are not static; lots may be split into smaller lots by
creating a separate part.  If one of those 86 minnows was prepared for
skeletal study by clearing and staining, it would be necessary to create
a second “part” within the catalogued item.

A cryotube of embryos or a box of ribs should have a lot count.  In
contrast, three tubes of muscle from an individual will be tracked
separately;  these should be entered as three collection objects, each
with a lot count of one.

There must be a value of at least one (1) for each part, and the maximum
is 99999. Lot counts are sometimes approximate. For example, a
three-liter jar of small minnows in alcohol might be given a lot count
of 400, at least until such time as someone counts the minnows.

Examples of lot count usage:

+--------------------------------------+--------------------------------------+
| <div align="center">                 | <div align="center">                 |
|                                      |                                      |
| **Material**                         | **Entry**                            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| Two embryos stored in the same       | embryo (lot count = 2)               |
| cryotube                             |                                      |
+--------------------------------------+--------------------------------------+
| Two liver samples stored in          | liver (lot count = 1)\               |
| individual tubes                     | liver (lot count = 1)                |
+--------------------------------------+--------------------------------------+
| Three tubes each containing five     | nematode (lot count = 5)\            |
| nematodes                            | nematode (lot count = 5)\            |
|                                      | nematode (lot count = 5)             |
+--------------------------------------+--------------------------------------+
| Ten vertebrae in a box               | vertebra (lot count = 10)            |
+--------------------------------------+--------------------------------------+
| A jar of five salamanders of the     | whole animal (lot count = 5)         |
| same species from the same           |                                      |
| collecting event.                    |                                      |
+--------------------------------------+--------------------------------------+

<div class="fldDef">

Specimen\_Part.Sampled\_From\_Obj\_Id\
NUMBER null

</div>

[](#top){.infoLink}

**Sampled From** designates a part derived from another part. This is
intended to be a subsample supplied to an investigator for destructive
analysis. therefore it often applies to parts that are no longer in the
collection, but if the subsamples or extracts thereof are returned,
these can be tracked.

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

