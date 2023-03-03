export const getPolutionText = (index: number) => {
    if(index <= 3) return 'Low';
    if(index > 3 && index < 7) return 'Moderate';
    if(index >= 7) return 'High';
}