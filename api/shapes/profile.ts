import { Settings } from './settings';
import { Loadout } from './loadouts';
import { ItemAnnotation } from './item-annotations';
import { DestinyVersion } from './general';

export interface ProfileResponse {
  settings?: Settings;
  loadouts?: Loadout[];
  tags?: ItemAnnotation[];
}

/**
 * A list of updates for a particular profile.
 */
export interface ProfileUpdateRequest {
  platformMembershipId: string;
  destinyVersion: DestinyVersion;
  updates: ProfileUpdate[];
}

type ProfileUpdate = TagUpdate | SettingUpdate | LoadoutUpdate;

export interface TagUpdate {
  action: 'tag';
  payload: ItemAnnotation;
}

export interface SettingUpdate {
  action: 'setting';
  payload: Partial<Settings>;
  // TODO: add a param to indicate whether it's the first time so we can try just updating?
}

export interface LoadoutUpdate {
  action: 'loadout';
  payload: Loadout;
}

export interface ProfileUpdateResponse {
  results: ProfileUpdateResult;
}

export interface ProfileUpdateResult {
  status: 'Success' | string;
  message?: string;
}