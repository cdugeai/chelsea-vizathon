{{ config(materialized='table' ) }}

select
     date,
     yyear,
     wweek,
     weekday,
    md_plus_code,
    md_minus_code,
    distance,
    distance_over_21,
    distance_over_24,
    distance_over_27,
    accel_decel_over_2_5,
    accel_decel_over_3_5,
    accel_decel_over_4_5,
    day_duration,
    peak_speed,
    hr_zone_1_hms,
    hr_zone_2_hms,
    hr_zone_3_hms,
    hr_zone_4_hms,
    hr_zone_5_hms
from stg_gps