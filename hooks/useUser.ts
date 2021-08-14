import { useQuery, useQueryClient } from 'react-query';

import { axInstance } from '../apis/nakvaksin.instance';
import { clearUserToken, destroyUserProfile, getUserToken } from '../services/auth';
import User from '../types/user';

const QK_USER = 'user';

async function getUser() {
    if (getUserToken() == null) {
        return null;
    }

    const { data } = await axInstance({
        method: 'GET',
        url: '/profile'
    });

    return data;
}

const useUser = () => {
    const queryClient = useQueryClient();

    const { data: user } = useQuery<User>(QK_USER, getUser, {
        staleTime: 1000 * 86400 * 3, // 3 days
        retry: 1
    });

    const logout = async () => {
        clearUserToken();
        destroyUserProfile();

        await queryClient.invalidateQueries(QK_USER);
    };

    return { user, logout };
};

export { useUser };
