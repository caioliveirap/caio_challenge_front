export const getInitials = (name: string): string => {
	const names = name.split(' ');
	const firstNameInitial = names[0].charAt(0);
	const lastNameInitial = names[names.length - 1].charAt(0);
	return `${firstNameInitial}${lastNameInitial}`;
};
