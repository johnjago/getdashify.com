+++
title = 'Admin Menu Editor compatibility'
slug = '2024-08-27-admin-menu-editor-compatibility'
date = '2024-08-27T15:41:57-05:00'
version = '1.3.3'
+++

This release of Dashify brings 2 improvements and 5 bug fixes:

### Improvements ✨

- Dashify’s navigation is now compatible with **Admin Menu Editor** by Janis Elsts. If Admin Menu Editor is enabled, Dashify’s custom arrangement of the menu items will be disabled, and the menu ordering in Admin Menu Editor will take effect.
- The “Clear filters” button in the order and product lists will turn red if at least one filter is applied, making it easier to find when you do want to clear filters.

### Bug fixes 🐞

- “Order status filter applied” message showing inside an order if the “All” status was clicked when viewing the order list.
- Order date and status showing twice in the mobile order list after a recent WooCommerce update.
- “Filter by order type” showing without WooCommerce Subscriptions.
- Lack of padding and a blank button in the order list if the last order of a given status is removed.
- “Add order” button being too wide when viewing the order list for the first time, before a store has any orders.
