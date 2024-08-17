export interface Tags {
  id: number;
  type: string;
  name: string;
  display_name: string;
}

export interface Feed {
  type: string;
  name?: string;
  category?: string;
  min_items?: number;
  item?: Recipe;
  items?: Recipe[];
}

export interface Recipe {
  approved_at: number;
  aspect_ratio: string;
  beauty_url: null | string;
  brand: null;
  brand_id: null;
  buzz_id: null;
  canonical_id: string;
  compilations: Compilation[];
  cook_time_minutes: number;
  country: string;
  created_at: number;
  credits: Credit[];
  description: string;
  draft_status: DraftStatus;
  facebook_posts: any[];
  id: number;
  inspired_by_url: null;
  instructions: Instruction[];
  is_app_only: boolean;
  is_one_top: boolean;
  is_shoppable: boolean;
  is_subscriber_content: boolean;
  keywords: string;
  language: Language;
  name: string;
  num_servings: number;
  nutrition: Nutrition;
  nutrition_visibility: string;
  original_video_url: string;
  prep_time_minutes: number;
  price: Price;
  promotion: Promotion;
  renditions: Rendition[];
  sections: Section[];
  seo_path: string;
  seo_title: string;
  servings_noun_plural: string;
  servings_noun_singular: string;
  show: Show;
  show_id: number;
  slug: string;
  tags: Tag[];
  thumbnail_alt_text: string;
  thumbnail_url: string;
  tips_and_ratings_enabled: boolean;
  topics: Topic[];
  total_time_minutes: null;
  total_time_tier: TotalTimeTier;
  updated_at: number;
  user_ratings: UserRatings;
  video_ad_content: VideoAdContent;
  video_id: number;
  video_url: string;
  yields: string;
}

export interface Compilation {
  approved_at: number;
  aspect_ratio: null | string;
  beauty_url: null | string;
  buzz_id: null;
  canonical_id: string;
  country: string;
  created_at: number;
  description: null | string;
  draft_status: DraftStatus;
  facebook_posts: any[];
  id: number;
  is_shoppable: boolean;
  keywords: null;
  language: Language;
  name: string;
  promotion: Promotion;
  show: Show[];
  slug: string;
  thumbnail_alt_text: string;
  thumbnail_url: string;
  video_id: number;
  video_url: string;
}

export enum DraftStatus {
  Published = "published",
}

export enum Language {
  Eng = "eng",
}

export enum Promotion {
  Full = "full",
  Partial = "partial",
}

export interface Show {
  id: number;
  name: Name;
}

export enum Name {
  Goodful = "Goodful",
  Tasty = "Tasty",
}

export interface Credit {
  image_url: string;
  name: string;
  id: number;
  type: string;
  slug: string;
}

export interface Instruction {
  appliance: null;
  display_text: string;
  end_time: number;
  id: number;
  position: number;
  start_time: number;
  temperature: null;
}

export interface Nutrition {
  calories: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  protein: number;
  sugar: number;
  updated_at: Date;
}

export interface Price {
  consumption_portion: number;
  consumption_total: number;
  portion: number;
  total: number;
  updated_at: Date;
}

export interface Rendition {
  aspect: string;
  bit_rate: number | null;
  container: string;
  content_type: string;
  duration: number;
  file_size: number | null;
  height: number;
  maximum_bit_rate: number | null;
  minimum_bit_rate: number | null;
  name: string;
  poster_url: string;
  url: string;
  width: number;
}

export interface Section {
  components: Component[];
  name: null;
  position: number;
}

export interface Component {
  extra_comment: string;
  id: number;
  ingredient: Ingredient;
  measurements: Measurement[];
  position: number;
  raw_text: string;
}

export interface Ingredient {
  created_at: number;
  display_plural: string;
  display_singular: string;
  id: number;
  name: string;
  updated_at: number;
}

export interface Measurement {
  id: number;
  quantity: string;
  unit: Unit;
}

export interface Unit {
  abbreviation: string;
  display_plural: string;
  display_singular: string;
  name: string;
  system: VideoAdContent;
}

export enum VideoAdContent {
  Imperial = "imperial",
  Metric = "metric",
  None = "none",
}

export interface Tag {
  display_name: string;
  id: number;
  name: string;
  root_tag_type: string;
  type: string;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface TotalTimeTier {
  display_tier: string;
  tier: string;
}

export interface UserRatings {
  count_negative: number;
  count_positive: number;
  score: number;
}
