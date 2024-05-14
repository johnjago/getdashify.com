+++
title = 'Improved order pagination'
slug = 'improved-order-pagination'
date = '2024-03-15'
draft = false
version = '1.1.3'
+++

Skipping to the next and previous orders in WooCommerce is even easier with this update of Dashify. Keyboard shortcuts, support for legacy post storage, and more intuitive behavior.

### Improvements ✨

- Order pagination buttons have tooltips and can be activated via keyboard shortcuts (K for next order, J for previous).
- Order pagination is available for non-HPOS WooCommerce.
- Order pagination will end at the newest/oldest order instead of paginating to the same one when on the newest/oldest order.
- Analytics range selection is saved.

### Bug fixes 🐞

- Previously, order pagination could land on a trashed/deleted order and would show an error page. Now, it will skip these orders.
