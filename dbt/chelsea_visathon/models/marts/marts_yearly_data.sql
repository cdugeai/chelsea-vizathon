select
    date,
    yyear,
    distance,
    case when distance =0 then 0
        else 100*distance_over_21/distance
    end as pct_distance_over_21,
    day_duration,
    peak_speed
from {{ref('stg_gps')}}