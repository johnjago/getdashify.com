+++
title = 'WooCommerce-focused admin navigation'
slug = '2024-08-09-woocommerce-focused-navigation'
date = '2024-08-09T13:47:57-05:00'
version = '1.3.0'
+++

Today we release an exciting addition to Dashify. Both free and Pro versions of Dashify get a new admin navigation menu—one that is designed for WooCommerce.

![Screenshot of the Dashify orders page showing the new admin navigation on the left side. The original WordPress admin navigation has been replaced by a new design, with WooCommerce menu items at the top. Also, WooCommerce menu items that before were hidden inside a submenu are now primary items in the menu, making it easier to locate WooCommerce pages within the admin navigation.](/releases/2024-08-09-woocommerce-focused-navigation/navigation.png)

Without Dashify, WooCommerce appears as a menu item somewhere in the middle of the admin navigation, and many important links such as Orders are hidden inside a submenu. This makes sense for sites where the store plays a small part, but it doesn’t make sense for sites which are primarily ecommerce stores. Store managers have to ignore many of the menu items that are not relevant to them.

Now with Dashify, that problem is solved—in two different ways.
- First, all WooCommerce menu items are brought to the top, separating them from the rest of WordPress.
- Second, many important links—such as Orders, Subscriptions and WooCommerce Settings—which were previously hidden inside the WooCommerce submenu are now primary items, not under any submenu. This makes it easier to navigate to all parts of WooCommerce.

We designed this with compatibility in mind.

- If a third-party plugin adds menu items, they will appear as they did before.
- If a third-party plugin added its menu item to the WooCommerce submenu, it will now appear outside the submenu in the primary WooCommerce items at the top, making it easy to locate.
- If we don’t have a custom icon for a third-party plugin, it will use its original icon.
- The navigation sidebar collapses for smaller screen sizes like the original WordPress navigation.
- You can open a dropdown to reveal the submenu items.
- Notification badges (like number of orders) are displayed.

Lastly, you can turn off the Dashify navigation via a setting in WooCommerce Settings → Dashify if it doesn’t suit your store. The rest of Dashify will work as usual without it.

### PHP 7.0 compatibility

As of August 2024, nearly [50% of WordPress sites are using PHP 7.4 or older](https://wordpress.org/about/stats/).

With this update, Dashify is compatible with any site running a PHP version as low as 7.0.

Dashify for everyone!

### Bug fixes 🐞

- Fixed order search and filter styling after a recent WooCommerce update.
- Fixed subscription revenue trend graph missing a flat line if 0 sales.
