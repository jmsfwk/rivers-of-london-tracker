export interface Store<T extends Object> {
    get(key: string): T|null;
    put(key: string, data: T): void;
}

class LocalStorageStore<T extends Object> implements Store<T> {
    get<T extends Object>(key: string): T|null {
        const data = localStorage.getItem(key);

        if (data === null) {
            return null;
        }

        return JSON.parse(data) as T;
    }

    put(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export const store = new LocalStorageStore();
