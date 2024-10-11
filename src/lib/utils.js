export function clsx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getFirstName(fullName) {
  return fullName.split(' ')[0];
}


export function sortTeamByFirstName(team) {
  return team.sort((a, b) => {
    const firstNameA = a.name.split(' ')[0].toLowerCase();
    const firstNameB = b.name.split(' ')[0].toLowerCase();
    if (firstNameA < firstNameB) return -1;
    if (firstNameA > firstNameB) return 1;
    return 0;
  });
}
