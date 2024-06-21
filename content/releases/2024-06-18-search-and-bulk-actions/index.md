+++
title = 'Updates to the order search and bulk actions'
slug = '2024-06-18-search-and-bulk-actions'
date = '2024-06-18'
draft = false
version = '1.2.6'
+++

### Improvements ✨

#### More intuitive order search

- While a search is active, the search and filter area of the order list will stay open, making it more clear that it’s currently showing results for a search.
- Clicking “Cancel” in the search is more intuitive—it will clear the search instead of just collapsing the search and filter area.

![Screenshot of the search and filter above the order list in Dashify’s version of the WooCommerce order list, showing it staying open while a search term is active.](/releases/2024-06-18-search-and-bulk-actions/search.png)

#### Bulk actions from other plugins are shown

- Previously, we only included the standard WooCommerce bulk actions so the floating ones don’t get too cluttered, but we’ve decided that it’s more functional to show all of them at the moment. If your store has many bulk actions, rest assured—an update is coming which will keep the convenience of floating actions, but will make it manageable if your store has a lot of them!

![Screenshot of the floating bulk actions that Dashify adds to the WooCommerce order list, which the new change being that bulk actions from all plugins are shown. In this screenshot, two additional bulk actions from a PDF invoice plugin are shown.](/releases/2024-06-18-search-and-bulk-actions/bulk-actions.png)

### Bug fixes 🐞

- We fixed a possible issue with changing the time frame of the order trend graphs on stores with a custom WordPress admin URL.

### Other

- Starting in WordPress 6.5, plugins can declare other plugins as dependencies. Dashify now requires WooCommerce before it can be installed or activated, since it’s only for WooCommerce.
