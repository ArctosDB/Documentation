---
title: How To Create Taxa
layout: default_toc
author: Phyllis Sharp, Teresa J. Mayfield-Meyer
date: 2018-12-09
---

# How To Create Taxa

The instructions in this How To are also given on each screen in Arctos as you create a new taxon.  Suggestions and clarifications to improve the instructions here and on the screens are always welcome.

## Create Taxon Name

The first step in creating a taxon is to create the name. Always search Arctos before creating taxon names.  Arctos will not let you create a name that already exists.  Do not try to create duplicate namestrings, even in the case of homonyms, hemihomonyms, committee rulings, or for any other reason.  There are two ways that taxon names are created, both require the Arctos user to have the manage_taxonomy role.

### Method 1 - Name, Then Related Classification

1. From the Arctos main menu select Search>Taxonomy. 
2. Type the name into the Taxon Name field. 
3. If no results are returned, click the “Create a new name" link. 
4. Type the name into the Scientific Name field. 
5. Click the Create Name button. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_create_name.png)

Note that this only creates the name which can be used in object identifications. The name does not have a related classification and objects using that name will only be found in searches under the EXACT name. To facilitate discovery, if your collection is using the Arctos or Arctos Plants Taxonomy, a classification related to the name should be created in the appropriate local taxonomy. A classification can be added to the newly created name from the Taxonomy Details page for the name. You will arrive at this page after creating the name.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_detail_page.png)

The list of External Links at the bottom of the page indicates the external Webservices in which the name may exist. You can make use of those to create a local classification by following these steps.

1. Click the [Refresh/pull GlobalNames] link.
2. Available classifications from the Webservice taxonomies will be presented.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_pull_global_names.png) 

3. Select the preferred webservice and click [Clone Classification].

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_preferred_webservice.png) 

4. Select the preferred local Source: Arctos, Arctos Plants, or WoRMS (via Arctos).  Note the cautions about the taxon cloning process in the red box.  Only the listed ranks will transfer from the selected source to the local classification.  These ranks are used to build “specimen data” which are used to create labels, locate specimens, etc.  If any are missing, you can add them on the next screen.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_create_clone.png) 

5. After selecting the Source, click “Create cloned classification.” 
6. Enter the Non-Classification Terms (these are not cloned and must be entered manually). The following terms are created by the user and are selected from the drop-down in the "Item Type" field.
  •	nomenclatural_code controls how display_name is suggested and helps format display. Most common values are “ICZN” and “ICNB.”  This is a mandatory field.
  •	author_text is the author of ICZN names, or the species author of ICBN names.  Always include the author (with or without parentheses as appropriate) unless no author is given.  It will be added to the display_name.  
  •	infraspecific_author is the author of the infraspecific epithet in ICBN names
  •	taxon-status is controlled by a code table.  While this is not mandatory, it is extremely helpful to users to know if the taxon is valid or not.
  •	source_authority should list the publication, website or other authority for the taxon.  When classifications are cloned from a Webservice, listing the Webservice name is appropriate.  The taxon authority table lists authorities recommended and used by current Arctos collection managers.
  •	remark is an open field for any comment that will be helpful to Arctos users.



### Method 2 - Name With Related classification
