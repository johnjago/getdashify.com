+++
title = 'Hide the WooCommerce “on sale” badge in Astra themes'
slug = 'astra-remove-sale-badge'
summary = 'How to remove the “sale!” or “on sale” badges from the product image on the shop page and product pages in WooCommerce when using an Astra theme.'
date = 2024-05-15T16:25:32-05:00
draft = false
+++

{{< rawhtml >}}
<div class="rounded-lg px-8 py-8 bg-[#9D6095E3] text-gray-50 text-lg">
	<h2 class="text-gray-50" style="margin-top: 0; margin-bottom: 0.6rem;">Summary</h2>
	<p style="margin-bottom: 0;">This is a tutorial on how to remove the “sale!” or “on sale” badges from the product image on the shop page and on product pages in WooCommerce when using an Astra theme. It assumes no coding experience and goes through each step with screenshots.</p>
</div>
{{< /rawhtml >}}

---

If you’ve seen these sale banners on products in your WooCommerce store, and you want them gone, here’s how you can do it while still keeping the items on sale.

![Screenshot of the sale badges on items on the shop page of a WooCommerce store.](/blog/astra-remove-sale-badge/shop-page-sale-badges.png)

## For most Astra themes

WordPress is transitioning to an interactive site editor instead of the classic “Customize” menu, but for most older themes and likely many Astra themes, you can add custom code to hide the sale badges using the following steps.

1. Go to your site’s dashboard (log in to WordPress).
2. In the side navigation, go to **Appearance → Customize → Additional CSS**.
3. Paste the following code:
	```css
	.ast-onsale-card {
		display: none !important;
	}
	```
4. Click the “**Save Changes**“ button.

After doing this, you should no longer see the sale badge on either the shop page or product page, even if the item is on sale.

## For the new WordPress site editor

If the theme supports the new WordPress site editor (released in 2022 and becoming more popular among themes in the following years), the steps are a little different.

1. Go to your site’s dashboard (log in to WordPress).
2. In the side navigation, go to **Appearance → Editor**.
3. Click on “**Styles**”.
	![Screenshot of the WordPress full site editor after landing on it from the WordPress dashboard.](/blog/astra-remove-sale-badge/site-editor-design.png)
4. Click the **pencil icon** to edit styles.
	![Screenshot of the WordPress full site editor after clicking “Styles”.](/blog/astra-remove-sale-badge/site-editor-styles.png)
5. At the bottom, open “**Additional CSS**”.
	![Screenshot of the WordPress full site editor after clicking the pencil icon to further edit styles.](/blog/astra-remove-sale-badge/site-editor-styles-edit.png)
6. Paste the custom code into the box:
	```css
	.ast-onsale-card {
		display: none !important;
	}
	```
	![Screenshot of the WordPress full site editor showing the box where to paste the custom code to hide the Astra sale badges.](/blog/astra-remove-sale-badge/site-editor-css.png)
7. Click “**Save**”.
