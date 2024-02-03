export const useSlideOverStore = defineStore('slideOver', () => {
	const isOpen = ref<boolean>(false);

	return { isOpen };
});
