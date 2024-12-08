/* eslint-disable no-use-before-define */
export interface Award {
  activation_description: null | string;
  amount: null | number;
  availability: number;
  consume_points: boolean;
  cr_points: null;
  cr_rank: number;
  description: null | string;
  highscore_contest: boolean;
  id: string;
  image: string;
  is_activateable: null;
  is_deactivatable: null;
  is_activated: null;
  is_active: boolean;
  throttle: Throttle | Throttle2 | Throttle3 | null;
  time_range_redeem_count: null;
  contest: boolean;
  is_redeemable: null;
  limited: boolean;
  name: string;
  needed_points: number;
  needed_visits: number;
  pictures: (Picture | Pictures2)[];
  point_contest: boolean;
  ranks: number;
  redeem_count: null;
  redeem_description: null | string;
  require_shop_when_redeemed: boolean;
  show_progress_bar: boolean;
  single_use: boolean;
  shipping: boolean;
  redeem_success_alert_text: null | string;
  app_form: null;
  bounty_redeem_alert_header: null | string;
  bounty_redeem_alert_text: string;
  show_ranking: boolean;
  contest_type: null;
  bounty_activate_alert_header: string;
  bounty_activate_alert_text: string;
  can_participate: null;
  is_participating: null;
  required_status: Requiredstatus | Requiredstatus2 | null;
  instant: boolean;
  valid_from: null | string;
  valid_until: null | string;
  manual_claim: boolean;
  shop: Shop | null;
  category: null | string;
  condition_id: null | string;
  is_expired: boolean;
  point_pool: Pointpool | Pointpool2 | Pointpool3 | null;
  order: null | number;
  terms: null;
  variations: Variation | Variations2 | Variations3 | Throttle3 | null;
  promo_redeem_types: (Promoredeemtype | Promoredeemtypes2)[];
  show_confirmation_dialog: null | string;
  reward_type: number;
  prizes: null;
  is_free_reward_usage_enabled: boolean;
  type: number;
}
export interface Promoredeemtypes2 {
  type: string;
  uri?: string;
  translations?: Translations4;
}
export interface Translations4 {
  en: En3;
  it: En3;
  sr: En3;
}
export interface En3 {
  uri: string;
}
export interface Promoredeemtype {
  type: string;
}
export interface Variations3 {
  variation_groups: Variationgroup3[];
}
export interface Variationgroup3 {
  name: string;
  key: string;
  placeholder: string;
  options: Option2[];
  translations: Throttle3;
}
export interface Variations2 {
  variation_groups: Variationgroup2[];
}
export interface Variationgroup2 {
  key: string;
  name: string;
  options: Option2[];
  placeholder: string;
  translations: Translations3;
}
export interface Translations3 {
  de: De;
  en: De;
  es: De;
  fr: De;
  it: De;
  nl: De;
  pt: De;
  pl: De;
  cs: De;
}
export interface De {
  placeholder: string;
}
export interface Option2 {
  label: string;
  value: string;
}
export interface Variation {
  variation_groups: Variationgroup[];
}
export interface Variationgroup {
  name: string;
  key: string;
  placeholder: string;
  options: Option[];
  translations: Translations2;
}
export interface Translations2 {
  en?: En2;
}
export interface En2 {
  name: string;
  placeholder: string;
}
export interface Option {
  label: string;
  value: string;
  translations?: Translations;
}
export interface Translations {
  en: En;
}
export interface En {
  label: string;
}
export interface Pointpool3 {
  id: string;
  type: string;
  key: string;
  metadata: Metadata;
  name: string;
  images: any[];
}
export interface Metadata {
  cash_discount_ratio: number;
  expiration_settings: Expirationsettings;
}
export interface Expirationsettings {
  enabled: boolean;
  type: string;
  properties: Properties;
}
export interface Properties {
  duration: number;
}
export interface Pointpool2 {
  id: string;
  type: string;
  key: string;
  metadata: null;
  name: string;
  images: any[];
}
export interface Pointpool {
  id: string;
  type: string;
  key: string;
  metadata: Throttle3;
  name: string;
  images: any[];
}
export interface Shop {
  id: number;
  name: string;
  address: Address;
}
export interface Address {
  street: string;
  city_code: string;
  city: string;
  location: Location;
  auto_location: boolean;
}
export interface Location {
  type: string;
  coordinates: number[];
}
export interface Requiredstatus2 {
  id: number;
  name: string;
  description: string;
  icon: null;
  order: null;
  definition_app: null;
}
export interface Requiredstatus {
  id: number;
  name: string;
  description: null;
  icon: null;
  order: null;
  definition_app: null;
}
export interface Pictures2 {
  image: string;
  order: number;
  type: null;
}
export interface Picture {
  image: string;
  order: number;
  type: null | string;
}
export interface Throttle3 {}
export interface Throttle2 {
  redeem_limit: number;
  redeem_limit_time_range: string;
}
export interface Throttle {
  redeem_limit: null;
  redeem_limit_time_range: null;
  wait_time: null;
}
