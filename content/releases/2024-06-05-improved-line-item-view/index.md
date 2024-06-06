+++
title = 'Improved line item view'
slug = '2024-06-05-improved-line-item-view'
date = '2024-06-05'
draft = false
version = '1.2.5'
+++

### Improvements ✨

This update focuses on improving the display of line items in the WooCommerce edit order view.

![Screenshot of the line items area of an order in the WooCommerce admin to show how Dashify styles it.](/releases/improved-order-line-items/line-items.png)

#### RD Order Modifier for WooCommerce compatibility

For users of RD Order Modifier for WooCommerce, Dashify applies styles so RD Order Modifier's fields have a more uniform appearance with the standard price adjustment fields. This saves space and looks better.

#### Line item column labels restored

We’ve restored the header that labels the columns above the list of products in an order.

#### Line items more easily viewed on mobile

We changed how the line items area is implemented so that it can scroll left and right on small screens, just like in regular WooCommerce. We also made small adjustments for a better experience on mobile.

### Bug fixes 🐞

- Fix an undefined array key warning when manually adding an order.
- WooCommerce Subscriptions: Fix broken pagination icons.
- WooCommerce Subscriptions: Fix the WooCommerce “rate us” message going into the subscription list.
- WooCommerce Subscriptions: Fix the subscriptions analytics graphs getting more data than is selected by the date range.
