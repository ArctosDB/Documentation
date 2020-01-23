---
title: How To Bulkload Media Metadata
layout: default_toc
author: Teresa Mayfield-Meyer
date: 2018-09-13
---


# How To Bulkload Media Metadata

After uploading, the directory can be used to build a media bulkloader file which creates media objects using the uploaded files in Arctos.


We'll use this directory to demonstrate.

https://web.corral.tacc.utexas.edu/UAF/uam_ento/2018_05_22/

Thumbnails are:

https://web.corral.tacc.utexas.edu/UAF/uam_ento/2018_05_22/tb/

and are prefixed with "tn_"

Open the bulkloader

<img width="363" alt="screen shot 2018-05-23 at 1 06 39 pm" src="https://user-images.githubusercontent.com/5720791/40448362-2ae1fc92-5e8a-11e8-83d2-b6bdd84acfef.png">

and paste the directory URL in to the "Directory URL" box and click the accompanying button.

The pattern of these filenames is {barcode}{sometimes underbar}{dot}{jpg}

ignore folders with "Filter for extension (eg, ".jpg")"

regexfind=_.*$ captures the information before the first underbar for variable "[filename]." (This common situation is documented in the inline documentation at the top of the page.)

Preview Directory URL is the folder containing the thumbnails

Preview prefix (eg, "tn_") - enter "tn_" to prepend to the image filenames

Preview extension (eg, ".jpg") - enter ".jpg" for jpg previews

Select a license, media type, and mime type.

The bulkloader will accept a part's barcode as a proxy to cataloged items. We've extracted that from the filename with the regex above,
so all that's necessary is to include the variable in relationship term.

<img width="759" alt="screen shot 2018-05-23 at 1 12 21 pm"
src="https://user-images.githubusercontent.com/5720791/40448644-fc399ca0-5e8a-11e8-9cda-a32bda279b55.png">

Scroll down, click "build/rebuild," confirm that everything worked as expected, download CSV, fill in any remaining blanks (or use the
tool to do so before downloading), load to the media bulkloader, wait for email.

## Alternative Method ##

For use with small batch media uploader tool or building a bulkloader file from scratch - see full documentation at [How to Upload Media to TACC](/how_to/How-to-Upload-Media-to-TACC)

### Modify Media Metadata Bulkload File

The file that you receive once your image upload is complete contains much of the information required to bulkload media.  Remember that although your media are now stored at TACC, they are not associated with any data in Arctos. The [Bulkload Media Metadata](http://arctos.database.museum/tools/BulkloadMedia.cfm) tool will allow you to complete this process.

This file will be deleted 3 days after the message is sent, but may be regenerated from the "existing jobs" link on the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool page. 

#### Media Metadata Bulkload Video Tutorial ####

[![YouTube: How to Bulkload Media Metadata in Arctos](https://i9.ytimg.com/vi/JkiRIH-JgYg/mq2.jpg?sqp=CPb5p_EF&rs=AOn4CLDXNJizQ4dIml0cRIwFts7fEgtVFQ)](https://www.youtube.com/watch?v=JkiRIH-JgYg)


#### Media Metadata Bulkload Video Tutorial ####

# Related Links

[How to Upload Media to TACC](/_how_to/How-to-Upload-Media-to-TACC)

[How to Create Media/Images](/_how_to/How-to-Create-Media-Images)

