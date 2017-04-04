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
    const s = document.createElement("script");
    s.src = "https://izanami-rc.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (document.head || document.body).appendChild(s);
  }
});
