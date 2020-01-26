function DNA_strand($dna) {

  // C === G
  // A === T
  $new_dna = '';
  $dna_arr = str_split($dna);
  foreach ($dna_arr as $strand) {
    switch ($strand) {
      case 'C':
        $new_dna .= 'G';
        break;
      case 'G':
        $new_dna .= 'C';
        break;
      case 'A':
        $new_dna .= 'T';
        break;
      case 'T':
        $new_dna .= 'A';
        break;
    }
  } 
  
  return $new_dna;
}
