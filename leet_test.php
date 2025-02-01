<?php

$nums=[3,2,4];
$target=6;
$result_total=twoSums($nums,$target);

function twoSums($nums,$target)
{

    for($i=0;$i<len($nums);$i++){
        $main=$nums[$i];
        $next=$nums[$i+1];
        $sum=$main+$next;
        if($sum==$target){
            $result=array($main,$next);
            
        }
        return $result;
    }
}
?>