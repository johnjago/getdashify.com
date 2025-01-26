+++
title = 'Dashify 1.2.11: Custom fields styling consistency'
slug = '2024-07-20-custom-fields-styling-consistency'
date = '2024-07-20T15:41:57-05:00'
version = '1.2.11'
+++

Previously, for non-HPOS sites, the default WooCommerce styles caused the Dashify custom fields, particularly the buttons, to look slightly different depending on whether the custom fields were in the main area or the sidebar.

Now, the look of the custom fields is the same no matter where it’s positioned.

{{< rawhtml >}}
<img
	src="/releases/2024-07-20-custom-fields-styling-consistency/custom-fields.webp"
	alt="Screenshot of the custom fields in the WooCommerce edit order view, styled by Dashify. This screenshot shows that the buttons sizes are more consistent compared to previous releases of Dashify."
	style="max-width: 50%; margin: 2rem auto;"
>
{{< /rawhtml >}}

### Also in this release

🗑️ We removed a small message at the bottom of the custom fields about using the fields in themes, as it’s relevant only for theme developers.

🐞 Lastly, we fixed being unable to resize the value textarea in the custom fields.
