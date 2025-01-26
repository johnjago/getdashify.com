+++
title = 'Dashify 1.3.5: Bulk actions for all third-party plugins'
slug = '2024-09-04-bulk-actions-compatibility'
date = '2024-09-04T15:04:57-05:00'
version = '1.3.5'
+++

Today’s Dashify update brings compatibility improvements for a number of third-party plugins.

### Improvements ✨

- Dashify’s floating bulk actions now supports all third-party plugins and languages.

![Screenshot of the floating bulk actions in Dashify. Two rows in a table representing two orders are visible, and they are both checked, which has caused a floating bar to appear at the bottom of the screen with a row of buttons that can be clicked to perform bulk actions on the selected orders. The text for each bulk action button is pulled from the original WooCommerce bulk actions dropdown, which is the main improvement in Dashify 1.3.5.](/releases/2024-09-04-bulk-actions-compatibility/bulk-actions.png)

- The admin menu icon and text, along with the order list action buttons, for *WooCommerce PDF Invoices, Packing Slips,
Delivery Notes and Shipping Labels* by WebToffee was adjusted for a native appearance.
- Dashify’s admin menu was made compatible with WooPayments.
- We aligned the admin menu text for several third-party plugins.

### Bug fixes 🐞

- Fixed PHP warning `Uninitialized string offset 11`.
- Fixed some WooCommerce menu items being out of place if WooPayments is missing.
