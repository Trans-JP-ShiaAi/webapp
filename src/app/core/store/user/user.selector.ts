
import { UserInfo } from "@app/core/models/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface AuthState {
    UserInfo: UserInfo | null;
    status: 'idle' | 'loading' | 'loaded' | 'error';
    error?: string;
}

export const initialState: AuthState = {
    UserInfo: null,
    status: 'idle',
    error: '',
  };

const authFeature = createFeatureSelector<AuthState>('auth_hero_feature');

export const userSelector = createSelector(authFeature , (state) => state.UserInfo?.user)
export const statusSelector = createSelector(authFeature , (state) => state.status);
export const errorSelector = createSelector(authFeature , (state) => state.error);