import { isRevisionControlEnabled } from "/imports/plugins/core/revisions/lib/api";
import { ProductDetailContainer, PublishContainer } from "../containers";
import { Template } from "meteor/templating";

Template.productDetailSimple.helpers({
  isEnabled() {
    return isRevisionControlEnabled();
  },
  PDC() {
    return ProductDetailContainer;
  }
});

Template.productDetailSimpleToolbar.helpers({
  PublishContainerComponent() {
    return {
      component: PublishContainer
    };
  }
});

Template.disquss.helpers({
  getDisqus() {
    const d = document;
    const s = d.createElement("script");
    s.src = "//http-localhost-3000-13.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }
});
